<template>
  <div id="sug">
    <div class="">
      <i></i><input type="text" name="" v-model="inputValue">
    </div>

  </div>
</template>
<style lang="scss">
#sug{
  margin-bottom: 3px;
  box-sizing: border-box;
  background: #fff;
  div{
      margin:0 10px 0 10px;
      position: relative;
      background: red;
    i{
      position: absolute;
      width: 16px;
      height:16px;
      background-image: url(../assets/img/search-icon.png);
      background-position: 0 -51px;
      background-size: 150px 140px;
      background-repeat: no-repeat;
    }

    input {
      height: 40px;
      width: 100%;
    }
  }

}
</style>
<script>
export default {
  props:[''],
  name: "sug",
  data: function data() {
    return {
      inputValue:"",
    }
  },
  watch:{
    "inputValue": function (nl,ol) {
      console.log(nl,ol)
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance

  },
  methods: {
    inputChange () {

    }
  }


}
</script>
