<template>
<div id="star">
  <div class="filter-sp " style="">
    <div class="sp-content">
      <div class="star">
        <div class="sp-tit">星级（可多选）</div>
        <ul class="star-list">
          <li v-for="(item ,index) in starlist" :sn='item.key' v-text='star[index].text' @click.stop="srarSelect(item,index)" :class="{on:star[index].checked}"></li>
        </ul>
      </div>
      <div class="price">
        <div class="sp-tit">价格</div>
        <ul class="price-list">
          <li v-for='(item,index) in price' :price-value="item.lowprice+'-'+item.highprice" @click.stop="priceSelect(item,index)" :class="{on:item.checked}">
            <span v-if="item.lowprice&& item.highprice">{{item.lowprice}}-{{item.highprice}}</span>
            <span v-if='item.lowprice && !item.highprice'>{{item.lowprice}}以上</span>
            <span v-if='!item.lowprice && !item.highprice'>不限</span>
          </li>
        </ul>
      </div>
    </div>
    <!--s-->
    <div class="bot-btn bar">
      <ul>
        <li class="reset" @click.stop="cleanSelect">清空选择</li>
        <li class="on confirm" @click.stop="confirmSelect">确定</li>
      </ul>
    </div>
    <!--e-->

  </div>
  <div class="mask-layer" @click.self.stop='maskdie'>

  </div>
</div>
</template>
<script>
export default {
  props: ['starlist','isShowStar'],
  name: "star",
  data () {
    return {
      selectData:{
        price:{},
        starlevels:[]
      },
      star:[
        {
          text:'不限',
          checked:true,
          key:'-1'
        },
        {
          text:'舒适',
          checked:false,
          key:'12'
        },
        {
          text:"三星/舒适",
          checked:false,
          key:'3'
        },
        {
          text:"四星/高档",
          checked:false,
          key:'4'
        },
        {
          text:"五星/豪华",
          checked:false,
          key:'5'
        }
      ],
      price:[
        {
          highprice:"",
          lowprice:'',
          checked:true,
        },
        {
          highprice:"150",
          lowprice:'0',
          checked:false,
        },
        {
          highprice:"300",
          lowprice:'151',
          checked:false,
        },
        {
          highprice:"450",
          lowprice:'301',
          checked:false,
        },{
          highprice:"700",
          lowprice:'451',
          checked:false,
        },
        {
          highprice:"",
          lowprice:'700',
          checked:false,
        }
      ]
    }
  },
  watch:{
    'isShowStar': function (nl,ol) {
      if ( this.$props.isShowStar ){

      }
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    location.hash='!_X!VUE=isShowStar'
  },
  methods: {
    srarSelect(e,index){
      if (index == 0){
        for (var i=0;i< this.star.length;i++ ){
          this.star[i].checked = false;
        }
        this.star[0].checked = true;
        this.selectData.starlevels.length = 0;
      } else {
        this.star[0].checked = false;
        this.star[index].checked = !this.star[index].checked;
        // 存在就去除
        if (this.selectData.starlevels.indexOf(e.key) > -1){
          this.selectData.starlevels.splice(this.selectData.starlevels.indexOf(e.key),1)
        } else {// 没有加添加
          this.selectData.starlevels.push(e.key)
        }
      }
      if ( this.selectData.starlevels.length == 0) {
        this.star[0].checked = true;
      }
    },
    priceSelect(e,index){

      if ( e.highprice || e.lowprice ) {
        this.selectData.price = e;
      } else {
        this.selectData.price = {};
      }
      for (var i=0; i< this.price.length; i++){
        this.price[i].checked = false;
        this.price[index].checked = true;
      }
    },
    cleanSelect(){
      this.selectData.price = {};
      this.selectData.starlevels = [];
      //星级清空
      for (var i in this.star ){
        this.star[i].checked = false;
      }
      for (var i=0; i< this.price.length; i++){
        this.price[i].checked = false;
      }
      this.star[0].checked = true;
      this.price[0].checked = true;

    },
    confirmSelect(){
      history.back();
      this.$emit('starCb',this.selectData)
    },
    maskdie() {
      history.back();
      //this.$emit('starCb');
    }
  },
  beforeUpdate () {// 组件更新之前
  },
  updated () {// 组件更新之后
  },
  activated () {// for keep-active 组件激活之时调用
  },
  deactivated () {// for keep-active 组件激活之后
  },
  beforeDestory () {// 组件销毁之前调用
  },
  destory () {// 组件销毁后调用
  }
}
</script>
<style lang="scss">
#star {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 80;

    .mask-layer{
      position: absolute;
      top:0;
      left:0;
      background: #000;
      z-index:81;
      width: 100%;
      height:100%;
      opacity: 0.7;
    }
    .filter-sp {
        color: #555;
        background-color: #FFF;
        position: absolute;
        z-index: 100;
        width: 100%;
        bottom: 0;

        .sp-content {
            padding: 20px 12px 30px;
            .star{
              .sp-tit{
                font-size: .813rem;
                margin-bottom: 4px;
              }
              .star-list{
                padding: 0 ;
                font-size: .688rem;
                min-height: 0;
                max-height: 1000px;
                display: -webkit-box;
                display: -moz-box;
                display: box;
                width: 100%;
                li{
                  border: 1px solid #DDD;
                  padding: 7px 0;
                  text-align: center;
                  -webkit-box-flex: 1;
                  -moz-box-flex: 1;
                  box-flex: 1;
                  margin-right: -1px;
                  width: 20%;
                  &.on{
                    border: 1px solid #09bb07;
                    position: relative;

                  }
                  &:first-child{
                    border-radius: 4px 0 0 4px ;
                  }
                }
              }
            }
            .price{
              margin-top: 12px;
              .sp-tit{
                margin-bottom: 8px;
              }
              .price-list{
                font-size: .688rem;
                width: 100%;
                padding: 0 ;
                min-height: 0;
                max-height: 1000px;
                display: -webkit-box;
                display: -moz-box;
                display: box;
                li{
                  border: 1px solid #DDD;
                  padding: 8px 0;
                  text-align: center;
                  -webkit-box-flex: 1;
                  -moz-box-flex: 1;
                  box-flex: 1;
                  margin-right: -1px;
                  width: 16.66%;
                  &.on{
                    border: 1px solid #09bb07;
                    position: relative;
                  }
                  &:first-child{
                    border-radius: 4px 0 0 4px;
                  }
                }
              }

            }
        }
        .bot-btn{
          width: 100%;
          background: #F8F8F8;
          border-top: 1px solid #ddd;

          z-index: 100;

          ul{
            display: -webkit-box;
            display: -moz-box;
            display: -ms-box;
            width: 100%;
            display: box;
            li{
              -webkit-box-flex: 1;
              -ms-box-flex: 1;
              -moz-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              -moz-flex: 1;
              flex: 1;
              height: 36px;
              line-height: 34px;
              border: 1px solid #DDD;
              text-align: center;
              border-radius: 3px;
              background: #FFF;
              &.on{
                background-color: #09bb07;
                color: #fff;
              }
            }
          }
        }
    }

}
</style>
