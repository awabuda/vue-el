<template >
    <div id="nofind">
      <img src="../assets/img/404.jpeg">
      <p>{{msg}}</p>
    </div>
</template>


<script >
export  default {
  data() {
    return {
      msg:"可能是小主尿急啦 。。。o(╯□╰)o"
    }
  }
}
</script>
<style media="screen" lang='scss'>
  #nofind{
    width: 100%;
    height:100%;
    overflow: hidden;
    background-color: #F2F2F2;

  }
  img {
    display: block;
    width: 100%;
    height:auto;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
  }
  p{
    text-align: center;
    font-size: 21px;
    color: #FFD306	;
    margin-top: 40%;
  }
</style>
