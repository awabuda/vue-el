<template >
    <div id="index">
      <my-swiper :bannerdata='bannerpic' :swiperoption = 'swiperOption'></my-swiper>
      <div class="main">
        <ul>
          <li class="city">
            <p class="cityname" @click='globalcity=!globalcity' :city-id="cityId">{{cityName}}</p>
            <span @click="getLocation">
              <i></i>
              我的位置
            </span>
          </li>
          <li class='date' @click='isShowCalendar=!isShowCalendar'>
            <dl class="in">
              <dt> 入住</dt>
              <dd data-value="" class="d1">{{indate}}</dd>
              <dd class="d2"> {{indateText}} </dd>
            </dl>
            <div class="total"><span><em>{{total}}</em>晚</span></div>
            <dl class="out " >
              <dt> 离店</dt>
              <dd data-value="" class="d1">{{outdate}}</dd>
              <dd class="d2"> {{outdateText}}</dd>
            </dl>
          </li>
          <li class='keywords'>
            <p>
              <label for="" @click='isShowKeyWord = !isShowKeyWord'></label>
              <input type="text" name="" value="" placeholder="关键词/酒店/地址" autocomplete="off" :value="kwSelect.nameCn">
            </p>
          </li>
          <li>
            <p>
              <label for="" @click='isShowStar=!isShowStar'></label>
              <input type="text" name="" :value="pricestar" placeholder="价格/星级" autocomplete="off">
            </p>
          </li>
        </ul>
        <router-link :to="{path:'/list',name:'list',query:params}" class="search_btn" tag='div'>
           查找酒店
        </router-link>
      </div>
      <globalCity v-show="globalcity" :historyCity='historyCity' @globalCb='citySelectCb' :cityId='cityId' :cityName='cityName' :globalcity="globalcity"></globalCity>
      <transition name="slide-fade">
        <star v-if="isShowStar" :starlist='starList' @starCb='priceSelect' :isShowStar="isShowStar"></star>
      </transition>

      <keyword v-show='isShowKeyWord' :city='cityId' :keyword='keywordDate' @keyUp='keySelect' :name='kwSelect.nameCn' :isShowKeyWord='isShowKeyWord'></keyword>
      <transition name="fade">
        <calendar v-show='isShowCalendar' @calSelect="calSelected" :indate='params.indate' :outdate="params.outdate" :isShowCalendar='isShowCalendar'></calendar>
      </transition>

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
import storage from '../components/storage/storage'
import globalCity from '../components/globalCity'
import star from '../components/star'
import keyword from '../components/keyword'
import calendar from '../components/calendar/calendar.vue'
import Geo from '../assets/js/glocaltion.js'
import mySwiper from '../components/swiper/swiper2.vue'

export  default {
  data() {
    return {
      cityName:"北京",
      cityId:"0101",
      indate: new Date().format('MM月dd日'),
      outdate: new Date().add(1,3).format('MM月dd日'),
      indateText:'今天',
      outdateText:'明天',
      bannerpic: JSON.parse(storage.getLocal('banner') || '[]'),
      total:1,
      swiperOption: {
        autoplay: 2000,
        pagination:".swiper-pagination",
        loop: true
      },
      globalcity:false,
      historyCity:[],
      isShowStar:false,
      isShowKeyWord:false,
      isShowCalendar:false,
      starList:[],
      priceParams:{},
      pricestar:'',
      week:['周日','周一','周二','周三','周四','周五','周六'],
      starlevels:{
        12:'舒适型',
        3:'三星/经济型',
        4:"四星/高档",
        5:"五星/豪华"
      },
      keywordDate:[],
      kwSelect:{
        nameCn:""
      },
      params:{
        indate:new Date().format('yyyy-MM-dd'),
        outdate:new Date().add(1,3).format('yyyy-MM-dd'),
        starlevels:"",
        isNear:"",
        keyword:'',
        lowprice:"",
        highprice:"",
        keywords:'',
        city:''
      }
    }
  },
  components:{
    mySwiper,
    globalCity,
    star,
    keyword,
    calendar
  },
  watch:{
    'priceParams': function ( nl,  ol){
      if ( ol != nl ){
        this.params.lowprice  = nl.price.lowprice;
        this.params.highprice = nl.price.highprice;
        this.params.starlevels = nl.starlevels.join(',')
      }
    },
    'params.indate':function ( nl, ol ) {
      if ( nl != ol ) {
        this.indate  = new Date(nl).format('MM月dd日')
        if (new Date('nl').format('yyyy-MM-dd') == new Date().format('yyyy-MM-dd')){
          this.indateText = "今天";
        } else if ( new Date(nl).format('yyyy-MM-dd') == new Date().add(1,3).format('yyyy-MM-dd') ) {
          this.indateText  = "明天";
        } else {
          this.indateText = this.week[new Date(nl).getDay()]
        }
      }
    },
    'params.outdate': function ( nl, ol){
      if ( nl != ol ) {
        this.outdate  = new Date(nl).format('MM月dd日')
        this.total = new Date(this.params.outdate).diff(new Date(this.params.indate),3);
        if ( new Date(nl).format('yyyy-MM-dd') == new Date().add(1,3).format('yyyy-MM-dd') ) {
          this.outdateText  = "明天";
        } else {
          this.outdateText = this.week[new Date(nl).getDay()]
        }
      }
    },
    'cityId':function ( nl,ol ){
        if ( ol != nl ) {
          for(var i in this.kwSelect ) {
            this.kwSelect[i] = '';
          }
          this.params.city = nl;
          this.getkeyword();
        }
    }
  },
  methods: { //虚拟dom中绑定的方法
    getLocation() {
      Geo.getH5Location();
    },
    calSelected(ind,outd){
      if ( ind && outd ) {
        this.params.indate = new Date(ind).format('yyyy-MM-dd');
        this.params.outdate = new Date(outd).format('yyyy-MM-dd');
      }
    },
    keySelect(item){
      this.kwSelect = item;
    },
    getkeyword(){
      this.$http.get('http://yapi.5zreo.cn/mock/24/test/place',{params:{city:this.cityId}
    }).then(function (res) {
      this.keywordDate = JSON.parse(res.body.simpleFilterInfos);
    })
    },
    getBanner() {
      this.$http.get('/api/banner').then(function (res) {
        if ( !!res.body.data.advList ) {
          if (storage.getLocal('banner') == JSON.stringify(res.body.data.advList)){
            console.log('....banner from cache')
          } else {
            this.bannerpic  = res.body.data.advList; // 给轮播加banner图
            storage.setLocal('banner',JSON.stringify(this.bannerpic))
          }
        }
      })
    },
    getGlobalCity() {
      var _this = this;
      this.$http.get('http://yapi.5zreo.cn/mock/24/test/miandata').then(function(res) {
          this.historyCity  = JSON.parse(res.body.hotCityList || "[{}]") ;
          this.starList = JSON.parse(res.body.starList|| '[{}]')
      })
    },
    citySelectCb: function (e) {
      if ( e.cityId != this.cityId ) {
        this.cityName = e.cityName;
        this.cityId = e.cityId;
      }
      //this.globalcity = false;
    },
    priceSelect(e){

      this.pricestar = ""; // 先清空
      if (e && e.price.highprice && e.price.lowprice){
        this.pricestar +='$'+ e.price.lowprice + '-'+e.price.highprice+'，'
      } else if (e && !e.price.highprice && e.price.lowprice){
        this.pricestar +='$'+ e.price.lowprice + '以上，'
      } else if (e && !e.price.highprice && !e.price.lowprice && e.starlevels.length > 0 ){
        this.pricestar+='价格不限，'
      };
      if ( e && e.starlevels && e.starlevels.length == 0 && (e.price.highprice || e.price.lowprice)) {
        this.pricestar+='星级不限'
      } else if ( e && e.starlevels && e.starlevels.length > 0 ) {
        for (var i = 0; i < e.starlevels.length;i++ ){
          e.starlevels = e.starlevels
          this.pricestar += this.starlevels[e.starlevels[i]]
        }
      }

      this.priceParams = e;
      //console.log(this.priceParams)


    }

  },
  beforeCreate () {// 组件实例刚被创建；组件属性计算之间入data el属性等
  },
  created () {// 组件实例已经创建完成，属性已绑定，但Dom还未生成，el 属性还不存在
   this.getBanner();
   this.getGlobalCity();
   this.getkeyword();


  },
  beforeMount () {// 编译模板/挂在之前
  },
  mounted () {// 编译模板、挂在之后。==》 不保证组件已在document中
    var _this = this;
    window.onhashchange =  function ( ) { //监听hash 以控制部分组件的显示与隐藏
      var plugin = _this.getHash('!_X!VUE')
      if (plugin){
        _this[plugin] = true;
      } else {
        _this.isShowStar = false;
        _this.isShowKeyWord = false;
        _this.globalcity = false;
        _this.isShowCalendar = false;
      }
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
<style media="screen" lang='scss'>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);;
}

.slide-fade-enter,.slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
#index{
  height:100%;
}
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
