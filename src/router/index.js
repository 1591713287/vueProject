import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Geren from '../pages/geren'
import Xiugai from '../pages/xiugai'
import Jiuzhen from '../pages/jiuzhen'
import Chengren from '../pages/jiuzhen/chengren'
import Ertong from '../pages/jiuzhen/ertong'
import Tiaozhuan from '../components/tiaozhuan'
import Cookie from '../components/cookie'
import login from '../components/login'
import searchlist from '../components/searchlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/xiugai',
      component: Xiugai
    },
    {
      path: '/tiaozhuan',
      component: Tiaozhuan
    },
    {
      path: '/geren',
      component: Geren
    },
    {
      path: '/cookie',
      component: Cookie
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/searchlist',
      component: searchlist
    },
    {
      path: '/jiuzhen',
      component: Jiuzhen,
      redirect:'/chengren',
      children:[
        {
          path: '/chengren',
          component: Chengren
        },
        {
          path: '/ertong',
          component: Ertong
        }
      ]
    }
  ]
})
