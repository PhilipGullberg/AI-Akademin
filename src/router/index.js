import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/AI-Akademin/',

      name: 'home',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'about',
      
    }
  ]
})

export default router
