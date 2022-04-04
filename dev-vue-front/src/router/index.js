import { createRouter, createWebHistory } from 'vue-router'
import co2 from '../views/co2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: co2
  },
  {
    path: '/:page',
    name: 'History',
    component: co2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
