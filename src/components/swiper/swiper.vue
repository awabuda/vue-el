<template>
  <div class="swiper-container myswiper swiper-container-horizontal" id='myswiper'>
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list"><img :src="item.pic" alt=""></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
var Swiper = require('swiper');
export default {
  data () {
    return {
        list:[{
            pic:"//m.elongstatic.com/promotions/wireless/uploadImages/images149697756057352.jpg"
          },
          {
            pic:"//m.elongstatic.com/promotions/wireless/uploadImages/images149740554575006.jpg"
          },
          {
            pic:"//m.elongstatic.com/promotions/wireless/uploadImages/images149689405077053.jpg"
          },
          {
            pic:"//m.elongstatic.com/promotions/wireless/uploadImages/images149723309534508.jpg"
          },
          {
            pic:"//m.elongstatic.com/promotions/wireless/uploadImages/images149664908651156.jpg"
          }
        ],
        swiper:null
    }
  },
  methods: { //虚拟dom中绑定的方法
    getBanner () {

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
    this.swiper = new Swiper('.myswiper',{
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
      });
    console.log(4)
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
<style media="screen">
  img{
    width: 100%;
    height:auto;
  }
</style>
