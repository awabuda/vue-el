<template >
  <div class='global_city'>
    <div class="current">
      <div class="page-title">附近</div>
      <div class="city-list ">
        <span>我的附近</span>
      </div>
    </div>
    <div class="search-history" >
      <div class="page-title">搜索历史</div>
      <div class="search-clearhistory" >清除历史</div>
      <div class="city-list" >
        <ul>
            <li city-id="0201" area-type="" area-id="" sug-origin="" class="on">
              <span>上海</span>
            </li>
        </ul>
      </div>
    </div>
    <div class="hot-city">
      <div class="page-title">热门城市</div>
      <div class="city-list">
        <ul>
          <li city-id="0101" area-type="" area-id="" sug-origin="" class="">
            <span>北京</span>
          </li>
          <li city-id="0201" area-type="" area-id="" sug-origin="" class="on">
            <span>上海</span>
          </li>
          <li city-id="2001" area-type="" area-id="" sug-origin="" class="">
            <span>广州</span>
          </li><li city-id="1201" area-type="" area-id="" sug-origin="" class="">
            <span>杭州</span>
          </li>
          <li city-id="2003" area-type="" area-id="" sug-origin="" class="">
            <span>深圳</span>
          </li>
          <li city-id="1801" area-type="" area-id="" sug-origin="" class="">
            <span>武汉</span>
          </li>
          <li city-id="2301" area-type="" area-id="" sug-origin="" class="">
            <span>成都</span>
          </li>
          <li city-id="2701" area-type="" area-id="" sug-origin="" class="">
            <span>西安</span>
          </li>
          <li city-id="1101" area-type="" area-id="" sug-origin="" class="">
            <span>南京</span>
          </li>
          <li city-id="0401" area-type="" area-id="" sug-origin="" class="">
            <span>重庆</span>
          </li>
          <li city-id="1901" area-type="" area-id="" sug-origin="" class="">
            <span>长沙</span>
          </li>
          <li city-id="1401" area-type="" area-id="" sug-origin="" class="">
            <span>厦门</span>
          </li>
          <li city-id="0301" area-type="" area-id="" sug-origin="" class="">
            <span>天津</span>
          </li>
          <li city-id="3201" area-type="" area-id="" sug-origin="" class="">
            <span>香港</span>
          </li>
          <li city-id="1001" area-type="" area-id="" sug-origin="" class="">
            <span>哈尔滨</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="all-city" >
      <div class="lc-city-lst">
        <ul>
          <li class="">
            <div class="lc-letter-tit">
              <span> A <i class="active"></i>
              </span>
            </div>
            <div class="lc-show-hide">
              <span city-id="1988" area-type="" area-id="">安仁县</span>
              <span city-id="2537" area-type="" area-id="">安宁市</span>
              <span city-id="3301" area-type="" area-id="">澳门</span>
              <span city-id="1653" area-type="" area-id="">安丘市</span>
              <span city-id="3126" area-type="" area-id="">阿合奇县</span>
              <span city-id="0585" area-type="" area-id="">安新县</span>
            </div>
          </li>
          <li class="">
            <div class="lc-letter-tit">
              <span> A <i class="active"></i>
              </span>
            </div>
            <div class="lc-show-hide">
              <span city-id="1988" area-type="" area-id="">安仁县</span>
              <span city-id="2537" area-type="" area-id="">安宁市</span>
              <span city-id="3301" area-type="" area-id="">澳门</span>
              <span city-id="1653" area-type="" area-id="">安丘市</span>
              <span city-id="3126" area-type="" area-id="">阿合奇县</span>
              <span city-id="0585" area-type="" area-id="">安新县</span>
            </div>
          </li>
          <li class="">
            <div class="lc-letter-tit">
              <span> B <i class="active"></i>
              </span>
            </div>
            <div class="lc-show-hide">
              <span city-id="1988" area-type="" area-id="">安仁县</span>
              <span city-id="2537" area-type="" area-id="">安宁市</span>
              <span city-id="3301" area-type="" area-id="">澳门</span>
              <span city-id="1653" area-type="" area-id="">安丘市</span>
              <span city-id="3126" area-type="" area-id="">阿合奇县</span>
              <span city-id="0585" area-type="" area-id="">安新县</span>
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
  props:['citydata'],
  data (){
      return {
        selectCity: storage.getLocal("selectcity")||""
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
          margin-right: 5%;
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
            display: none;
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
