import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const navigationGuard = (to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Dashboard' })
  } else if (to.name === 'Dashboard' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Add' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Edit' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  },
  {
    path: '/products/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: navigationGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
