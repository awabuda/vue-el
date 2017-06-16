<template >
    <div id="index">
      <myswiper></myswiper>
      <router-link :to="{path:'/list',name:'list',params:{userId:123}}">
         列表
      </router-link>
    </div>

</template>

<script >

export  default {
  data() {
    return {
      msg:"欢迎来到我的首页"
    }
  },
  components:{
    Myswiper: require('../components/swiper/swiper3.vue')
  }
}
</script>
