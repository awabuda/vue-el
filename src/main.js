// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
require('./date.js')
//import store from './components/store/store'


//Vue.prototype.store = store;
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.getHash = function (name) {
  var params = location.hash.substring(1).split('&');
   for (var i = 0; i < params.length; i++) {
       var tmp = params[i].split("=");
       if (tmp.length > 1 && name == tmp[0]) {
           return tmp[1];
       }
   }
   return null;
};

Vue.prototype.cloneDeep =  function (obj) {
  var newObj = null;
   if (!obj) {
       newObj = obj;
   } else if (typeof obj != 'object') {
       newObj = obj;
   } else {
       newObj = obj.constructor == Array ? [] : {};

       for (var i in obj) {
           newObj[i] = this.cloneDeep(obj[i]);
       }
   }
   return newObj;
}


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
// window.onhashchange = function (e) {
//   console.log(e)
// }
