<template>
<div id="star">
  <div class="filter-sp " style="">
    <div class="sp-content">
      <div class="star">
        <div class="sp-tit">星级（可多选）</div>
        <ul class="star-list">
          <li sn="-1" class="on">不限</li>
          <li sn="12" class="">经济</li>
          <li sn="3" class="">三星/舒适</li>
          <li sn="4" class="">四星/高档</li>
          <li sn="5" class="">五星/豪华</li>
        </ul>
      </div>
      <div class="price">
        <div class="sp-tit">价格</div>
        <ul class="price-list">
          <li class="on" price-value="0">不限</li>
          <li price-value="0-150" class="">0-150</li>
          <li price-value="151-300" class="">151-300</li>
          <li price-value="301-450" class="">301-450</li>
          <li price-value="451-700" class="">451-700</li>
          <li price-value="701" class="">700以上</li>
        </ul>
      </div>
    </div>
    <!--s-->
    <div class="bot-btn bar">
      <ul>
        <li class="reset">清空选择</li>
        <li class="on confirm">确定</li>
      </ul>
    </div>
    <!--e-->
  </div>
</div>
</template>
<script>
export default {
  props: [''],
  name: "star",
  data: function data() {
    return {

    }
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
    z-index: 99;
    background: #000;
    opacity: 0.7;
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
