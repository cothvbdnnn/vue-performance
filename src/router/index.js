import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(
        /* webpackChunkName: "home" */
        '../components/Home'
      )
    },
    {
      path: '/category',
      name: 'category',
      component: () => import(
        /* webpackChunkName: "categories" */
        '../components/Categories'
      )
    }
  ]
})