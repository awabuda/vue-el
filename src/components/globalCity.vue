<template >
  <div class='global_city'>
    <div class="current">
      <div class="page-title">附近</div>
      <div class="city-list ">
        <span>我的附近</span>
      </div>
    </div>
    <div class="search-history" v-show="hisShow">
      <div class="page-title">搜索历史</div>
      <div class="search-clearhistory" v-on:click='clearHisData'>清除历史</div>
      <div class="city-list" >
        <ul>
            <li v-for="his in localCity" :city-id="his.cityId" :area-type="his.areaType" :area-id="his.areaId" sug-origin=""  :class="{on:his.cityId == cityId}" v-on:click="citySelect(his)">
              <span v-text='his.cityName'></span>
            </li>
        </ul>
      </div>
    </div>
    <div class="hot-city">
      <div class="page-title">热门城市</div>
      <div class="city-list">
        <ul>
          <li v-for="item in historyCity" :city-id="item.cityId"  :area-type="item.areaType" :area-id="item.areaId" :sug-origin="item.sugOrigin" :class="{on:item.cityId==cityId}"      @click="citySelect(item)"><span v-text='item.cityName'></span></li>
        </ul>
      </div>
    </div>
    <div class="all-city" >
      <div class="lc-city-lst">
        <ul>
          <li class="" v-for='all in allCity' @click="allCitySelect(all)">
            <div class="lc-letter-tit">
              <span> {{all.letter}}<i  v-bind:class="{active:!all.checked}"></i>
              </span>
            </div>
            <div class="lc-show-hide" v-show='all.checked'>
               <span v-for='item in allCityData' :city-id="item.cityId" :area-type="item.areaType" :area-id="item.areaId" v-text="item.cityName" @click="citySelect(item)"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
import storage from './storage/storage'

export default  {
  props:['historyCity',"cityId",'cityName'],
  data () {
      return {
        allCity:[{letter:"A",checked:false},{letter:"B",checked:false},{letter:"C",checked:false},{letter:"D",checked:false},{letter:"E",checked:false},{letter:"F",checked:false},{letter:"G",checked:false},{letter:"H",checked:false},{letter:"I",checked:false},{letter:"J",checked:false},{letter:"K",checked:false},{letter:"L",checked:false},{letter:"M",checked:false},{letter:"N",checked:false},{letter:"O",checked:false},{letter:"P",checked:false},{letter:"Q",checked:false},{letter:"R",checked:false},{letter:"S",checked:false},{letter:"T",checked:false},{letter:"U",checked:false},{letter:"V",checked:false},{letter:"W",checked:false},{letter:"X",checked:false},{letter:"Y",checked:false},{letter:"Z",checked:false}],
        localCity: JSON.parse(storage.getLocal("historyCity")||'[]'),
        hisShow:!!storage.getLocal("historyCity") ?  true: false,
        allCityData:[],
        selectLetter:""

      }
  },
  mounted () {

  },
  activated(){
      console.log(0)
  },
  methods: {
    citySelect: function(e) {
      var hisData = JSON.parse(storage.getLocal('historyCity')|| '[]');
      for (var i=0;i<hisData.length;i++){
        if( hisData[i].cityId == e.cityId ){
          hisData.splice(i,1)
        }
      }
      hisData.unshift(e);
      storage.setLocal('historyCity',hisData)
      this.$emit('globalCb',e);

    },
    clearHisData: function (e) {
      storage.removeLocal('historyCity');
      this.hisShow = false;
    }
    ,
    allCitySelect: function (all) {
        this.allCityData = [];
        this.$http.get('https://m.elong.com/hotelwxqb/api/gethotelcitysbyletter/',{
          params:{ letter:all.letter,_rt: new Date().getTime()}
        }).then(function (res) {
          for ( var i= 0;i < this.allCity.length ;i++ ){
            if (this.allCity[i].letter == all.letter){
                this.allCity[i].checked = !this.allCity[i].checked;
            } else {
              this.allCity[i].checked = false;
            }
          }
          this.allCityData = res.body;
        },function () {
          console.log('请求失败')
        })
      }
    }
  }
</script>



<style media="screen" lang='scss'>
.global_city {
  width: 100%;
  height:100%;
	color:#555;
  position: absolute;
  top:0;
  left:0;
  z-index: 100;
  overflow: scroll;
  webkit-overflow-scrolling: touch;
  background-color: #F2F2F2;
  .current{
    border-bottom: 1px solid #ddd;
    padding:12px;
    .page-title{
      height: 30px;
      line-height: 30px;
    }
    .city-list{
      span{
        display: block;
        width: 60px;
        padding: 8px;
        text-align: center;
        background: white;
        border-radius: 3px;
        margin-left:3px;
      }
    }
  }
  .search-history{
    border-bottom: 1px solid #ebebeb;
    position: relative;
    margin-bottom: 8px;
    padding: 0px 12px;
    .page-title{
      line-height: 24px;
      margin-bottom: 6px;
    }
    .search-clearhistory{
      width: 27%;
      position: absolute;
      right: 12px;
      top: 15px;
      margin-top: -10px;
      color: #333;
      text-align: right;
    }
    .city-list{
      ul{
        overflow: hidden;
        padding-bottom: 1px;

        li{

          width: 30%;
          border-radius: 3px;
          margin-right: 3.33%;
          margin-bottom: 12px;
          background: #FFF;
          height: 40px;
          border: 0;
          float: left;
          text-align: center;
          &.on{
            color:#09bb07;
          }
          span{
            display: inline-block;
            vertical-align: middle;
            line-height: 1;

            overflow: hidden;
            line-height: 39px;
            font-size: 12px;
          }
        }
      }
    }
  }
  .hot-city{
    padding: 0px 12px;
    border-bottom: 1px solid #ddd;
    line-height: .875rem;

    .page-title{
      font-size: .75rem;
      line-height: 24px;
      margin-bottom: 6px;
      color:#999;
      }

    .city-list{
      color: #555;

      ul{
        overflow: hidden;
        padding-bottom: 1px;

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
          &.on{
            color:#09bb07;
          }
          span{
            display: inline-block;
            vertical-align: middle;
            line-height: 1;
            max-width: 5em;
            max-height: 2em;
            overflow: hidden;
            }
        }
      }
    }
  }
  .all-city{
    .lc-city-lst{
      ul{
        li{
          border-bottom: 1px #dadada solid;
          &.lc-lst-bd{
            .lc-show-hide{
              display: block;
            }
          }
          .lc-letter-tit{
            background: #ebebeb;
            height: 34px;
            line-height: 34px;
            padding: 0 12px;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            span{
              color: #444;
              font-size: 1rem;
              box-sizing: border-box;
              -webkit-tap-highlight-color: transparent;
              line-height: 34px;
              i{
                display: inline-block;
                position: absolute;
                right: 12px;
                top: 50%;
                margin-top: -2px;
                width: 9px;
                height: 9px;
                background-image: none;
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
                border-top: 2px #ccc solid;
                border-right: 2px #ccc solid;

                &.active{
                    width: 9px;
                    height: 9px;
                    transform: rotate(136deg);
                    -webkit-transform: rotate(136deg);
                    margin-top: -8px;
                    display: inline-block;

                }
              }
            }
          }
          .lc-show-hide{
            background: #fff;
            padding: 0 12px;
            overflow: hidden;
            span{
              display: inline-block;
              height: 44px;
              line-height: 44px;
              width: 100%;
              border-top: 1px solid #ebebeb;
              margin-top: -1px;
              font-size: .938rem;
              color: #333;
            }
          }
        }
      }
    }
  }
}



</style>
