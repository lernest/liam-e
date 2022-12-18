import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Juggler from '../views/Juggler.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/juggler',
    name: 'Juggler',
    component: Juggler
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
