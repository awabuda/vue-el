// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
//import store from './components/store/store'


//Vue.prototype.store = store;
Vue.use(VueResource);
Vue.config.productionTip = false;


router.beforeEach(({meta, path}, from, next) =>{ //路由的钩子函数

  next(); // 这里必须执行；
})
window.Vue = Vue;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode:'history',
  router,
  template: '<App/>',
  components: { App }
})
