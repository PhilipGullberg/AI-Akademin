import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ServicesPage from '../views/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/AI-Akademin/',

      name: 'home',
      component: LandingPage
    },
    {
      path: '/services/',
      name: 'services',
      component: ServicesPage
      
    }
  ]
})

export default router
