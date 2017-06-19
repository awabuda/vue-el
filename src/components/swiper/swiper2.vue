<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.picUrl" >
      </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>


  </div>
</template>
<script>
// 个人感觉这个方法不错
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import store from '../../components/store/store'
var store = require('../../components/store/store');
export default {
  components:{
     swiper, swiperSlide
  },
  data () {
    return {
        list: [],
        swiper:null,
        swiperOption: {
          autoplay: 2000,
          pagination:".swiper-pagination",
          loop: true
        }
    }
  },
  methods: { //虚拟dom中绑定的方法
    getBanner () {
      this.$http.get('/api/banner').then(function (res) {
        console.log(res)
        if ( !!res.body.data.advList ) {
          this.list = res.body.data.advList;
        }
      },function () {
        console.log('请求失败')
      })
    }
  }
  ,
  beforeCreate () {// 组件实例刚被创建；组件属性计算之间入data el属性等
    console.log(1)
  },
  created () {// 组件实例已经创建完成，属性已绑定，但Dom还未生成，el 属性还不存在
    console.log(2)
  },
  beforeMount () {// 编译模板/挂在之前
    console.log(3)
  },
  mounted () {// 编译模板、挂在之后。==》 不保证组件已在document中
    this.getBanner();
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
