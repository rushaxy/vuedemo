import Vue from 'vue'
import Router from 'vue-router'

//@表示src
import HelloWorld from '@/components/HelloWorld'

import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Page from '../views/Page.vue'

Vue.use(Router)

const routes = [ 
  {
    path: '/app',
    name: '', 
    component:()=> import('@/App.vue')
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld //()>{import ':@/components/HelloWorld'} 
  },
  {
    path: '/demo',
    name: 'Demo',
    /* webpackChunkName: "Demo" */ 
    component: () => import('../views/Demo.vue')
  },
  {
    path:'/',
    name:'index',
    component:  Index,
    children: [
      {
        path:'/about',
        name:'about',
        component:()=>import('../views/About.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      
      // {
      //   path: '/demo',
      //   name: 'Demo',
      //   /* webpackChunkName: "Demo" */ 
      //   component: () => import('../views/Demo.vue')
      // },
      {
        path: '/page',
        name: 'page',
        component:Page
      },
    ]
  }
]

const router = new Router({
    mode: 'history',//路由不再显示hash 即#
    base: process.env.BASE_URL,
    routes
})

export default router
