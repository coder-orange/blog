import Vue from 'vue'
import VueRouter from 'vue-router'
// viewRouter
const home = () => import('../views/Home.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      title:'首页'
    },
    component: home,
    children:[]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
