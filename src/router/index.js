import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/Index')
    },
    {
      path: '/list',
      name: 'list',
      component:require('../views/List')
    },{
      path:'*',
      name:"404",
      component:require('../views/404')
    }
  ]
})
