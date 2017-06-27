import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/Index'),
    },
    {
      path: '/list',
      name: 'list',
      component:require('../views/List'),

    },{
      path:'*',
      name:"404",
      component:require('../views/404')
    }
  ]
})
