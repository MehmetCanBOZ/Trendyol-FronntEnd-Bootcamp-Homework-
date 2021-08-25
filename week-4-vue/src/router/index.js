import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StarshipDetail from '../views/StarshipDetail.vue'
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/starship/:name',
    name: 'StarshipDetail',
    component: StarshipDetail
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router