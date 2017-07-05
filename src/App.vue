<template>
  <div id="app">
    <keep-active>
      <router-view></router-view>
    </keep-active>
  </div>
</template>

<script>
import './assets/css/base.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;

}

</style>
