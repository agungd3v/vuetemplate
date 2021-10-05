import Vue from 'vue'
import VueRouter from 'vue-router'
import { init, auth, hasauth } from '../middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: auth
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
    beforeEnter: hasauth
  },
  {
    path: '*',
    name: 'Page404',
    component: () => import('../views/errors/Page404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(init)

export default router
