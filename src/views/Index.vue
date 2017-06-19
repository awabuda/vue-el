<style media="screen" lang='scss'>
  img{
    width: 100%;
    height:auto;
  }
  .mian{
    width: 100%;
    height:auto;
  }
  .main ul {
    height:auto;
    padding:0 10px;
  }
  .main ul  p {
    height: 50px;
    line-height: 50px;
    position: relative;
    display: block;
  }
  .main ul  p input {
    display: block;
    font-size: 20px;
    width: 100%;
    height:49px;
    overflow: hidden;
    text-emphasis: ellipsis;
  }
  .main ul  p label{
    position: absolute;
    width: 100%;
    height:100%;
    z-index: 1
  }
  .main ul li {
    width: 100%;
    height:49px;
    border-bottom: 1px solid #ebebeb;
  }
  .cityname{
    margin-right: 100px;
    font-size: 18px;
  }
  .city{
    position: relative;
  }
  .city span {
    position: absolute;
    top:0px;
    right:0;
    height:100%;
    width: 76px;
    line-height: 50px;
    text-align: center;
    color: #09bb07;

  }
  .city span i {
    float: left;
    width: 15px;
    height:15px;
    margin:17px 0;
    display: inline-block;

    vertical-align: middle;
    background-image: url(../assets/img/wxqbh5-index.png);
    background-repeat: no-repeat;
    background-size: 250px 150px;
    background-position: -150px -90px;
  }
  .city span::after{
    content: "|";
    position: absolute;
    left: -10px;
    font-size: 18px;
    top: 2px;
    color: #09bb07;
  }
  .search_btn{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    background: #09bb07;
    margin: 10px;
    border-radius: 6px;
    color: #c3c3c3;
  }
  .date{
    width: 100%;
    height: 67px;
    position: relative;
}
.date .in {
  float: left;
  margin: 0;
  width: 110px;
}

.date dl dt {
  font-size: .688rem;
  color: #b2b2b2;
  line-height: 20px;
  }
.total {
  left: 50%;
  position: absolute;
  padding-top: 15px;
  margin-left: -20px;
}
.out {
  float: right;
  margin: 0;
  width: 110px;
}
.d1{
  font-size: 1.25rem;
  float: left;
  margin: 0;
}
.prolist{

    margin-top:14px;
      display:box;
      display:-moz-box;
      display:-webkit-box;
      display:-ms-box;

      li{
        box-flex:1;
        -moz-box-flex:1;
        -webkit-box-flex:1;
        -ms-box-flex:1;
        width:25%;
        font-size:.688rem;
        line-height:1;
        text-align:center;
        &:active{
          background:#fafafa;
        }
        a{
          display:block;
          padding:12px 0;
          color:#353535;
        }
        i{
          display:block;
          margin:0 auto 12px;
          width:26px;
          height:27px;
          vertical-align:middle;
          background-image:url(../assets/img/wxnewicon.png);
          background-repeat:no-repeat;
          background-size:120px 120px;
          &.ihotel{
            background-position:0 0;
          }
          &.near{
            background-position:-30px 0;
          }
          &.sale{
            background-position:-60px 0;
          }
          &.clock{
            background-position:-89px 0;
          }
          &.localtr{
            background-position:5px -90px;
          }
          &.find{
            background-position:3px -60px;
          }
          &.flight{
            background-position:0 -30px;
          }
          &.train{
            background-position:-178px 0;
          }
          &.bus{
            background-position:-120px 0;
          }
          &.team{
            background-position:0px -30px;
          }
          &.free{
            background-position:-28px -30px;
          }
          &.custom{
            background-position:-180px -30px;
          }
          &.minsu{
            background-image: url(../assets/img/minsu.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width:30px;
            height:27px;
          }
          &.perunder{
            background-position:-30px -60px;
            width:32px;
            height:31px;
            margin:0 auto 5px;
          }
          &.ticket{
            background-position:-88px -25px;
            width:28px;
          }
          &.cruise{
            background-position:-90px -94px;
          }
          &.guide {
            background-position: -28px -91px;
          }
          &.expert {
            background-position: -59px -90px;
            position: relative;
            span{
              position: absolute;
              top: -9px;
              right: -15px;
              display: block;
              background-color: #ff5555;
              font-style: normal;
              font-size: 0.625rem;
              line-height: 0.625rem;
              color: #fff;
              padding: 2px;
              border-radius: 5px;
            }
          }
        }
      }
    }
</style>

<template >
    <div id="index">
      <myswiper ></myswiper>
      <div class="main">
        <ul>
          <li class="city">
            <p class="cityname">北京市</p>
            <span>
              <i></i>
              我的位置
            </span>
          </li>
          <li class='date'>
            <dl class="in">
              <dt> 入住</dt>
              <dd data-value="" class="d1">6月6日</dd>
              <dd class="d2"> 今天 </dd>
            </dl>
            <div class="total"><span><em>1</em>晚</span></div>
            <dl class="out " >
              <dt> 离店</dt>
              <dd data-value="" class="d1">6月7日</dd>
              <dd class="d2"> 明天</dd>
            </dl>
          </li>
          <li class='keywords'>
            <p>
              <label for=""></label>
              <input type="text" name="" value="" placeholder="关键词/酒店/地址" autocomplete="off">
            </p>
          </li>
          <li>
            <p>
              <label for=""></label>
              <input type="text" name="" value="" placeholder="价格、星级" autocomplete="off">
            </p>
          </li>
        </ul>
        <router-link :to="{path:'/list',name:'list',params:{userId:123}}" class="search_btn" tag='div'>
           查找酒店
        </router-link>
      </div>
      <ul class="prolist first s_bdb">
        <li><a href="#" class="isnearby tjclick" ><i class="near isnearby"></i>附近酒店</a></li>
        <li class="s_bdl"><a href="#" class="cheap_hotels tjclick" ><i class="sale"></i>特惠酒店</a></li>
        <li class="s_bdl"><a class="tjclick elongticket"  href="#"><i class="ticket"></i>门票</a></li>
        <li class="s_bdl"><a href="#" class="clock-hotel tjclick" ><i class="clock"></i>钟点房</a></li>
      </ul>
      <ul class="prolist second">
        <li class="tjclick" ><a href="https://msecure.elong.com/authorize/ctriplogin/?backUrl=https%3A%2F%2Fwetrip.elong.com%2Fwebapp%2Ftours%2Felong%2Findex%3Fallianceid%3D106206%26sid%3D550008%26popup%3Dclose%26from%3Dhttps%253A%252F%252Fx.elong.com%252Fhotelwxqb%252Findex%252F%26ouid%3D190000000049381181%26latitude%3D31.228425%26longitude%3D121.478133"><i class="team"></i>跟团游</a></li>
        <li class="tjclick s_bdl" ><a href="https://msecure.elong.com/authorize/ctriplogin/?backUrl=https%3A%2F%2Fwetrip.elong.com%2Fwebapp%2Ftours%2Fdiyelong%2Findex%3Fallianceid%3D106206%26sid%3D550008%26popup%3Dclose%26from%3Dhttps%253A%252F%252Fx.elong.com%252Fhotelwxqb%252Findex%252F%26ouid%3D190000000049381181%26latitude%3D31.228425%26longitude%3D121.478133"><i class="free"></i>自由行</a></li>
        <li class="tjclick s_bdl" ><a class="localtour" href="#"><i class="localtr"></i>当地游</a></li>
       <li class="tjclick s_bdl" ><a href="https://msecure.elong.com/authorize/ctriplogin?backUrl=https%3A%2F%2Fwetrip.elong.com%2Fwebapp%2Fvacations%2Felongguider%2Fhomepage%3Fallianceid%3D106206%26sid%3D550008%26popup%3Dclose%26from%3Dhttps%253A%252F%252Fx.elong.com%252Fhotelwxqb%252Findex%252F%26ouid%3D190000000049381181%26latitude%3D31.228425%26longitude%3D121.478133"><i class="guide"></i>当地向导</a></li>
    </ul>
    </div>

</template>

<script >

export  default {
  data() {
    return {
      msg:"欢迎来到我的首页",
    }
  },
  components:{
    Myswiper: require('../components/swiper/swiper2.vue')
  },
  methods: { //虚拟dom中绑定的方法

  },
  beforeCreate () {// 组件实例刚被创建；组件属性计算之间入data el属性等
    console.log(1)
  },
  created () {// 组件实例已经创建完成，属性已绑定，但Dom还未生成，el 属性还不存在
    console.log(2)
    console.log(this.store)

  },
  beforeMount () {// 编译模板/挂在之前
    console.log(3)
  },
  mounted () {// 编译模板、挂在之后。==》 不保证组件已在document中
  },
  beforeUpdate () {// 组件更新之前
    console.log(4 + '+')
  },
  updated () {// 组件更新之后
    console.log(5)
  },
  activated () {// for keep-active 组件激活之时调用
    console.log(6)
  },
  deactivated () {// for keep-active 组件激活之后
    console.log(7)
  },
  beforeDestory () {// 组件销毁之前调用
    console.log(8)
  },
  destory () {// 组件销毁后调用
    console.log(9)
  }
}
</script>
