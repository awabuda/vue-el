import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/Index'),
      children:[
        {
          path:'/city',
          name:'city',
          component: require('../components/globalCity')
        }

      ]
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
