import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "views-home" */ '@/views/home/index')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '1Token_数字货币行业的专业级券商+期货公司'
      }
    }
  ]
})

// permission control here
// wap，web page redirect automatically here
// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
