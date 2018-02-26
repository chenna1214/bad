import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signIn from '@/components/signIn.vue'// 登录
import all from '../components/all.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 登录
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    // 非登录
    {
      path: '/all',
      name: 'all',
      component: all
    }
  ]
})
