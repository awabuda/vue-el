<template>
    <swiper :options="swiperoption"  >
      <swiper-slide v-for="item in bannerdata" :key="item.id">
        <img :src="item.picUrl" >
      </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
// 个人感觉这个方法不错

import { swiper, swiperSlide } from 'vue-awesome-swiper';


export default {
  props:['bannerdata','swiperoption'],
  components:{
     swiper, swiperSlide
  },
  methods: { //虚拟dom中绑定的方法


  }
  ,
  beforeCreate () {// 组件实例刚被创建；组件属性计算之间入data el属性等
  },
  created () {// 组件实例已经创建完成，属性已绑定，但Dom还未生成，el 属性还不存在
  },
  beforeMount () {// 编译模板/挂在之前
  },
  mounted () {// 编译模板、挂在之后。==》 不保证组件已在document中

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
.swiper-wrapper{
height:200px;
}
.swiper-slide{
  height:200px;
}
img{
  width:100%;
  height:200px;
}
</style>
