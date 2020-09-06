import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form/permit/:action/:id?',
    name: 'CreateOrEdit',
    component: () => import('../views/CreateOrEditPermit.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
