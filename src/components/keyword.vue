<template>
<div id="keyword" v-show='isShowKeyWord'>
  <keywordSug></keywordSug>
    <div class="page-select page-content" @click.stop.self="back">

      <div class="current-city">
        <div class="get-city"><i class="icon-nearby"></i>查看我附近的酒店<b></b></div>
      </div>
      <div class="search-history" v-if='isShowhis'>
        <div class="page-title">搜索历史<span class="sea-clear" @click='cleanSelect'>清除历史</span></div>
        <div class="keyword-list">
          <ul>
            <li v-for='item in localKeyW' :keyword-id="item.keywordId" :city-id="city" :filter-type="item.filterType" :iskeyword="item.keyword" :name-cn="item.nameCn" :lat="item.lat" :lng="item.lng" :hotelname="item.hotelName" :placename="item.placeName" :type-id="item.typeId" @click='keySelect(item)' hotel-brand-id="n167033088745261_7468709921099261_53" brandname="7天" :class="{on:item.nameCn==name}"><span v-text='item.nameCn'></span></li>
          </ul>
        </div>
      </div>
      <div class="keyword-group" v-for='(item,index) in dataKey'>
        <div class="page-title" v-text='item.nameCn'></div>
        <div class="keyword-list">
          <ul>
            <li v-for="(value,key) in item.subFilterInfoEntities" keyword-id="" city-id="0201" filter-type="" iskeyword="" name-cn="如家" lat="" lng="" hotelname="" placename="" type-id="3" hotel-brand-id="n167033088745261_7468709921099261_32" brandname="如家" :class="{'hide': value.show,on:value.nameCn==name}" @click='keySelect(value)'><span v-text='value.nameCn'></span></li>
            <li v-for='(value,key) in item.subFilterInfoEntities' :class='[value.flag && key ==4 ? "icon-bottom" : "icon-top"]' v-if="key==4" @click='showHide(index,key)'></li>
          </ul>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import storage from './storage/storage'
import keywordSug from './sug'
export default {
  components: {
    keywordSug
  },
  props: ['city','keyword','name','isShowKeyWord'],
  name: "",
  data() {
    return {
      localKeyW:JSON.parse(storage.getLocal('localKeyW') || '[]'),
      isShowhis: storage.getLocal('localKeyW') ? true : false,
      dataKey:[]

    }
  },
  mounted() {


  },
  watch:{
    "isShowKeyWord": function ( nl, ol ) {
      if ( this.$props.isShowKeyWord ) {
        location.hash="!_X!VUE=isShowKeyWord";
        this.cloneKeyWord();
      }
    }
  },
  methods: {
    keySelect(item) {
      this.$emit('keyUp',item);
      var hisData = JSON.parse(storage.getLocal('localKeyW')|| '[]');
      for (var i=0;i<hisData.length;i++){
        if( hisData[i].nameCn == item.nameCn ){
          hisData.splice(i,1)
        }
      }
      hisData.unshift(item);
      storage.setLocal('localKeyW',hisData)
      history.back();
    },
    cloneKeyWord() {
      var cont =  this.cloneDeep(this.keyword)
      for (var i=0;i<cont.length;i++) {
        for (var j=0;j<cont[i].subFilterInfoEntities.length;j++){
          if (j>4){
            cont[i].subFilterInfoEntities[j].show = true;
            cont[i].subFilterInfoEntities[j].flag = true;
          } else {
            cont[i].subFilterInfoEntities[j].show = false;
            cont[i].subFilterInfoEntities[j].flag = true;
          }
        }
      }
      this.dataKey = cont;
    },
    showHide( index,key ){
      this.dataKey[index].subFilterInfoEntities[key].flag = !this.dataKey[index].subFilterInfoEntities[key].flag
      for (var i=0;i<this.dataKey[index].subFilterInfoEntities.length;i++){
        if ( i > 4 ) {
          this.dataKey[index].subFilterInfoEntities[i].show = !this.dataKey[index].subFilterInfoEntities[i].show
        }
      }

    },
    back(){
      history.back();
    },
    cleanSelect() {
      storage.removeLocal('localKeyW');
      this.isShowhis = false;
    }
  }
}
</script>
<style lang="scss">
#keyword {
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    overflow: hidden;
    z-index: 99;
    background-color: #F2F2F2;
    .page-select{
      background: #F2F2F2;
      padding: 0px 12px 12px 12px;
      overflow: auto !important;
      -webkit-overflow-scrolling: touch;
      height: 100%;
      position: relative;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      .current-city{
        margin-bottom: 15px;
        .get-city{
          margin: 0px -12px;
          line-height: 26px;
          font-size: .875rem;
          border: 0;
          background: #FFF;
          padding: 8px 12px;
          position: relative;
          .icon-nearby{
            vertical-align: -5px;
            color: #999;
            background-repeat: no-repeat;
            vertical-align: -3px;
            width: 16px;
            height: 16px;
            display: inline-block;
            margin-right: 10px;
            line-height: 26px;
            background-image: url(../assets/img/wxqbh5-index.png);
            background-position: -60px 0;
            background-size: 250px 150px;

          }
          b{
            width: 12px;
            height: 12px;
            display: inline-block;
            position: absolute;
            color: #ccc;
            font-size: .813rem;
            right: 10px;
            font-weight: bold;
            top:16px;
            &:after{
              border-color: #ccc;
              content: "";
              width: 8px;
              height: 8px;
              position: absolute;
              top: 2px;
              left: 1px;
              border: 1px solid #ddd;
              border-width: 0px 0px 2px 2px;
              -webkit-transform: rotate(-135deg);
              -ms-transform: rotate(-135deg);
              transform: rotate(-135deg);
              top: 0px;
              border: 1px solid #999;
              border-width: 0 0 1px 1px;
            }
          }
        }
      }
      .search-history{
        margin-bottom: 4px;
        .page-title{
          margin-bottom: 15px;
          font-size: .75rem;
          color: #888;
          position: relative;
          .sea-clear{
            position: absolute;
            right: 2px;
            top: 0;
            color: #555;
          }
        }
        .keyword-list{
          ul{
            overflow: hidden;
            padding-bottom: 1px;
            margin-right: -3px;
            li{
              width: 30%;
              border-radius: 3px;
              margin-right: 3.33%;
              margin-bottom: 12px;
              background: #FFF;
              height: 40px;
              line-height: 40px;
              border: 0;
              text-align: center;
              float: left;
              display: box;
              display: -webkit-box;
              display: -moz-box;
              -webkit-box-pack: center;
              -moz-box-pack: center;
              -webkit-box-align: center;
              -moz-box-align: center;
              &.on{
                color: #09bb07;
              }
            }
          }
        }
      }
      .keyword-group{
        margin-bottom: 4px;
        .page-title{
          margin-bottom: 15px;
          font-size: .75rem;
          color: #888;
          position: relative;
        }
        .keyword-list{
          ul{
            overflow: hidden;
            padding-bottom: 1px;
            margin-right: -3px;
            li{
              width: 30%;
              border-radius: 3px;
              margin-right: 3.33%;
              margin-bottom: 12px;
              background: #FFF;
              height: 40px;
              line-height: 40px;
              border: 0;
              text-align: center;
              float: left;
              display: box;
              display: -webkit-box;
              display: -moz-box;
              -webkit-box-pack: center;
              -moz-box-pack: center;
              -webkit-box-align: center;
              -moz-box-align: center;
              &.on{
                color: #09bb07;
              }
              &.icon-top{
                margin-right: 0;
                color: #CCC;
                &:before{
                  content: '';
                  display: inline-block;
                  margin-top: 4px;
                  width: 8px;
                  height: 8px;
                  border: 1px solid #999;
                  border-width: 0 0 1px 1px;
                  -webkit-transform: rotate(135deg);
                  -ms-transform: rotate(135deg);
                  -moz-transform: rotate(135deg);
                  transform: rotate(135deg);
                  right: 0;
                }
              }
              &.icon-bottom{
                color: #CCC;
                &:before{
                  top: 0px;
                  border: 1px solid #999;
                  border-width: 0 0 1px 1px;
                  content: '';
                  display: block;
                  margin-top: -4px;
                  width: 8px;
                  height: 8px;
                  -webkit-transform: rotate(-45deg);
                  -ms-transform: rotate(-45deg);
                  transform: rotate(-45deg);
                  right: 0;
                }

              }
              span{
                font-size: .75rem;
                display: inline-block;
                vertical-align: middle;
                line-height: 1rem;
                max-width: 5em;
                max-height: 2rem;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
}
.hide{
  display: none !important;
}
</style>
