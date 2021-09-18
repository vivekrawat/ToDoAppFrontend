import Vue from 'vue'
import VueRouter from 'vue-router'
// import {store} from '../store/store.js'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name :'Home',
        // component: () => import('../views/Home.vue')
        component: Home
    },
    {
        path: '/tasks',
        name:'Tasks',
        component: () => import('../views/Tasks.vue')
    },
    {
      path: '/details',
      name:'Details',
      component: () => import('../views/Details.vue')
  }
]
const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path !== '/' && localStorage.getItem('id') === '') {
      next({ path: '/' })
    } else if (to.path === '/' && localStorage.getItem('id') !== '') {
      next({ path: '/tasks' })
    } else {
      next()
    }
    next()
  })
export default router