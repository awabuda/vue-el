<template>
  <div id='calander'>
    <div class="calander_wrap">
      <section class='cld_item' v-for='(s,key) in allMonth'>
        <h3 class="title_date">{{s.month}}</h3>
        <ul class="cld_day">
          <li  v-for='(day,index) in s.modays' :class='{holiday:festival.holidaytag[s.all[index].date]=="休",work:festival.holidaytag[s.all[index].date]&& festival.holidaytag[s.all[index].date] !="休",active:s.all[index].checked,activeduring:s.all[index].activeduring,isdisable:!s.all[index].isdisable}' @click="riliSelect(key,index)">
            <!-- 又是假期又是 节日-->
            <div v-if='festival.holidaytag[s.all[index].date]&& (festival.cnfestivaltag[s.all[index].date] || festival.festivaltag[s.all[index].dateCN])'>

              <span class='festival date-elem' v-text="day-s.firDay > 0 ? day-s.firDay : ''"></span>
              <span class="festivalText">{{festival.cnfestivaltag[s.all[index].date] ||festival.festivaltag[s.all[index].dateCN]}}</span>
              <b v-text="festival.holidaytag[s.all[index].date]" class='holiday'></b>
            </div>
            <!-- 假期 非节日 -->
            <div class="" v-else-if="festival.holidaytag[s.all[index].date] && !festival.cnfestivaltag[s.all[index].date] && !festival.festivaltag[s.all[index].dateCN]">
              <span class="date-elem" v-text="day-s.firDay > 0 ? day-s.firDay : ''"></span>
              <b v-text="festival.holidaytag[s.all[index].date]" class='holiday'></b>
            </div>
            <div class="" v-else-if="!festival.holidaytag[s.all[index].date] && (festival.cnfestivaltag[s.all[index].date] || festival.festivaltag[s.all[index].dateCN]) && index >=s.firDay">
              <span class='festival' v-text="day-s.firDay > 0 ? day-s.firDay : ''"></span>
              <span class="festivalText">{{festival.cnfestivaltag[s.all[index].date] ||festival.festivaltag[s.all[index].dateCN]}}</span>
            </div>
            <div class="" v-else>
              <span class="date-elem" v-text="day-s.firDay > 0 ? day-s.firDay : ''"></span>
            </div>


          </li>
        </ul>
      </section>
    </div>
    <ul class="weekend">
      <li class="weekay">日</li>
      <li class="weekay">一</li>
      <li class="weekay">二</li>
      <li class="weekay">三</li>
      <li class="weekay">四</li>
      <li class="weekay">五</li>
      <li class="weekay">六</li>
    </ul>

  </div>
</template>
<script>
import festifval from './festival.js'
require('./date.js')
export default {
  // props indate outdate isdouble mindate maxdate
  props:['indate','outdate','ef'],
  data: function data() {
    return {
      mindate:new Date().format('yyyy-MM-dd'),
      maxdate:new Date().add(6,2).format('yyyy-MM-dd'),
      allMonth:[],
      startText:'入住',
      endText:"离店",
      tag: ["日", "一", "二", "三", "四", "五", "六"],
      festival:festifval,
      doubleClick : true,
      today:new Date().format('yyyy-MM-dd'),
      selectValue:{
        indate:{
          key:'',
          index:'',
          text:''
        },
        outdate:{
          key:'',
          index:'',
          text:''
        }
      }

    }
  },
  name: "calendar",
  mounted: function mounted() {
    location.hash='!_X!VUE=isShowCalendar';
  //  this.getFestival();
    //console.log(this.festival)
    this.getDiffMoth(this.mindate,this.maxdate);

  },
  /**
   * 1是否可点 isdisable
   * 2 月份 month
   * 3 各个日期 年-月-日 主要用于传参 节日
   * 4 月日  -月-日 验证 节日
   * 5 点中态 checked
   * 6 当月天数 days
   * 7 当月第一天 是周几 first
   * 8 modays
   */
  methods: {
    /**
     * @param  {[type]} key [月份key]
     * @param  {[type]} index [第几天 index]
     */
    riliSelect(key,index){
      var _this = this;
      if ( this.allMonth[key].all[index].isdisable ) {
          this.allMonth[key].all[index].checked = !this.allMonth[key].all[index].checked;

          if ( !this.doubleClick ){
            this.$emit('calSelect',this.allMonth[key].all[index].date);
            history.back()
          } else {
            // 清空属性带过来的start
            if ( this.selectValue.indate.text && this.selectValue.outdate.text ) {
              //去除日期中间的淡化 start
              this.allMonth.forEach(function (value) {
                value.all.forEach(function (item){

                  if (new Date(item.date).diff(new Date(_this.selectValue.indate.text),3)>0 && new Date(item.date).diff(new Date(_this.selectValue.outdate.text),3) < 0 ){
                    item.activeduring = false;
                  }
                })
              })
              //去除日期中间的淡化 end
              this.allMonth[this.selectValue.indate.key].all[this.selectValue.indate.index].checked = false;
              this.allMonth[this.selectValue.outdate.key].all[this.selectValue.outdate.index].checked = false;
              this.selectValue.indate.text ="";
              this.selectValue.outdate.text = "";
            }
            // 清空属性带过来的end
            // 选择相同的 日期 进行清空 start
            if ( this.selectValue.indate.text == this.allMonth[key].all[index].date ) {
              this.selectValue.indate.text = "";
              this.selectValue.indate.key  = "";
              this.selectValue.indate.index = "";
              return false;
            }
            // 选择相同的 日期 进行清空 start

            if ( this.selectValue.indate.text == '' ) {
              this.selectValue.indate.text = this.allMonth[key].all[index].date;
              this.selectValue.indate.key  = key;
              this.selectValue.indate.index = index;
              this.allMonth[key].all[index].checked = true;
            } else if ( new Date(this.selectValue.indate.text).getTime() > new  Date(this.allMonth[key].all[index].date).getTime() ){

              this.allMonth[this.selectValue.indate.key ].all[this.selectValue.indate.index].checked = false;
              this.selectValue.indate.text = this.allMonth[key].all[index].date;
              this.selectValue.indate.key  = key;
              this.selectValue.indate.index = index;
            } else {
              this.selectValue.outdate.text = this.allMonth[key].all[index].date;
              this.selectValue.outdate.key  = key;
              this.selectValue.outdate.index = index;
            }

            if ( this.selectValue.indate.text && this.selectValue.outdate.text ) {
              // 入离店日期之间飘淡 start;
              this.allMonth.forEach(function (month) {
                month.all.forEach(function (item) {
                  if (new Date(item.date).diff(new Date(_this.selectValue.indate.text),3)>0 && new Date(item.date).diff(new Date(_this.selectValue.outdate.text),3)<0 && item.isdisable){
                    item.activeduring = true;
                  }
                })
              });
              // 入离店日期之间飘淡 end;
              this.$emit('calSelect',this.selectValue.indate.text,this.selectValue.outdate.text);
              setTimeout(function () {
                history.back();
              },300)

            }
          }

      }
    },
    getFestival () {
      this.festival = this.cloneDeep(festifval);
    },
    getDiffMoth : function ( d1 , d2) {
      if (d1 == d2) {
          var d = {};
          d.month = new Date(d1).add(0,2).format('yyyy年MM月');
          d.days = new Date(d1).daysInMonth();
          d.firstDate = new Date(d1).getStartDate().format('yyyy-MM-dd')
          d.firDay = new Date(d.firstDate).getDay();
          d.modays  = d.days + d.firDay;
          d.all = [];
          for ( var j=0; j< d.modays; j++ ){
            var cpt = {};
            if ( j>=d.firDay ) {
              cpt.isdisable = true;
            } else {
              cpt.isdisable = false; // 是否可点
            }
            if (new Date(cpt.date).diff(new Date(this.today),3) < 0) {
               cpt.isdisable = false;
            }
            cpt.checked = false; // 点中态；
            cpt.date = new Date (d.firstDate).add(j-d.firDay,3).format('yyyy-MM-dd');
            // 已经选中的 start
            if ( cpt.date == this.indate && cpt.cpt.isdisable){
              cpt.checked = true;
              this.selectValue.indate.text = this.indate;
              this.selectValue.indate.key = i;
              this.selectValue.indate.index = j;
            }
            if ( cpt.date == this.outdate && cpt.cpt.isdisable){
              cpt.checked = true;
              this.selectValue.outdate.text = this.outdate;
              this.selectValue.outdate.key = i;
              this.selectValue.outdate.index = j;
            }
            // 已经选中 end
            cpt.dateCN = new Date(cpt.date).format('MM-dd');
            cpt.activeduring = false;
            d.all.push(cpt);
          }
          this.allMonth.push(d)
      } else {
        var n = new Date(d2).diff(new Date(d1),2);
        for (var i =0; i<= n;i++){
          var s ={

          };
          s.month = new Date(d1).add(i,2).format('yyyy年MM月');
          s.days = new Date(d1).add(i,2).daysInMonth();
          s.firstDate  =  new Date(d1).add(i,2).getStartDate().format('yyyy-MM-dd');// 当月1号
          s.firDay = new Date(s.firstDate).getDay(); // 当月1号是周几
          s.modays = s.days + s.firDay;
          s.all = []
          for ( var j=0; j< s.modays; j++ ) {
            var cpt = {
            };
            cpt.checked = false; // 点中态；
            cpt.date = new Date (s.firstDate).add((j-s.firDay),3).format('yyyy-MM-dd');

            cpt.dateCN = new Date(cpt.date).format('MM-dd');
            cpt.activeduring = false;
            if ( j >= s.firDay ) {
              cpt.isdisable = true;
            } else {
              cpt.isdisable = false; // 是否可点
            }
            if (new Date(cpt.date).diff(new Date(this.today),3) < 0) {
               cpt.isdisable = false;
            }
            if ( cpt.date == this.indate && cpt.isdisable){
              cpt.checked = true;
              this.selectValue.indate.text = this.indate;
              this.selectValue.indate.key = i;
              this.selectValue.indate.index = j;
            }
            if ( cpt.date == this.outdate && cpt.isdisable){
              cpt.checked = true;
              this.selectValue.outdate.text = this.outdate;
              this.selectValue.outdate.key = i;
              this.selectValue.outdate.index = j;
            }
            if (new Date(cpt.date).diff(new Date(this.indate),3)>0 && new Date(cpt.date).diff(new Date(this.outdate),3)<0 && cpt.isdisable){
              cpt.activeduring = true
            }
            s.all.push(cpt);
          }

          this.allMonth.push(s);
        }
      }
    }
  }

}
</script>
<style lang="scss">

#calander{
	background-color: #f3f3f3;
	position: absolute;
	width:100%;
	height:100%;
  left:0;
  top:0;
	overflow: hidden;
  z-index: 99;
}
.calander_wrap{
	width: 100%;
	height:100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding-top: 48px;
	.cld_item{
		width:100%;
		.title_date{
			height:30px;
			text-align: center;
			line-height: 30px;
      background-color: lightgray;
		}
		.cld_day{
			width:98%;
			padding:0 1%;
			display: flex;
			flex-direction:row;
			flex-wrap:wrap;
			li{


				width: 14%;
				margin-top: 10px;
				height:38px;
				position: relative;
				div{
					width: 100%;
					height:100%;
					span.festival{/*日期*/
						display: none;
					}
					span.festivalText{/*节日*/
						font-size: 12px;
						color:red;
					}
				}
				span.date-elem{
					font-size: 15px;
					display: block;
					width:100%;
					height:100%;
					line-height: 38px;
					text-align: center;
				}
				&:nth-of-type(7n),&:nth-of-type(7n+1){ /*周六日*/
					span.date-elem{
						color:red;
					}
          &.isdisable{
            span{
              color:#c3c3c3;
            }
          }
				}
        &.isdisable{
  			  div{
  			    color:#c3c3c3;

  			  }
  			}

				&.holiday{/*假期*/
					color:red;
					b.holiday{/*休*/
						position: absolute;
						top:0;
						right: 0;
					}

				}
        &.work{
          color:#2c3e50;
          span.date-elem{
            color:#2c3e50;
          }
          b.holiday{
            position: absolute;
						top:0;
						right: 0;
          }
        }
				span.festivalText{
					width: 100%;
					height:100%;
					display: block;
					text-align: center;
					line-height: 40px;
				}
				&.active{

				  & + li.active{
				    div{
				      border-radius: 0 5px 5px 0;
				    }
				  }

					div{
						height: 100%;
						width: 100%;
						background-color: #09bb07;
            border-radius: 5px 0px 0px 5px;
						overflow: hidden;
						span.active{
							width:100%;
							height:100%;
							position: relative;
							display: inline-block;
							left:0;
							right: 0;
							top: 0;
							bottom: 0;
							padding:8px 0;
							text-align: center;
							line-height: 5px;
							color:#fff;

						}
						span.activeText{
							width: 100%;
							color:#fff;
							position: absolute;
							display: inline-block;
							bottom: 2px;
							left: 0;
							text-align: center;

						}
					}

        }
        &.active:nth-child(1  ){
          div{
            background: red;
          }
        }
				&.activeduring{
					span.date-elem{
						background-color:#DFFFDF;
						color:#09bb07;
					}
					& + li.active {
						div{
							border-radius: 0 5px 5px 0;
						}

					}
				}
			}
		}
	}
}
.weekend{
	width: 98%;
	height:48px;
	position: absolute;
	top:0;
	left:0;
	display: flex;
	padding:0 1%;
	background: #c4f5e6;
}
.weekay{
	width: 14%;
	height:48px;
	text-align: center;
	line-height: 48px;
	&:nth-of-type(1){
		color:red;
	}
	&:nth-last-of-type(1){
		color:red;
	}
}

</style>
