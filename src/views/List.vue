<template >
    <div id="index">
      {{msg}}
    </div>
</template>


<script >

export  default {
  data() {
    return {
      msg:"欢迎光临列表页"
    }
  },
  created () {
    this.fetch();
  },
  methods:{
    fetch () {
      this.msg = this.$route.params.userId
    }
  }

}
</script>
