import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ContactPage from "../views/ContactPage.vue"

const router = createRouter({
  scrollBehavior() {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
  history: createWebHistory(import.meta.env.BASE_URL),
 
  routes: [
    {
      path: '/AI-Akademin/',
      alias: "",
      name: 'home',
      component: LandingPage
    },
    {
      path: '/services/',
      name: 'services',
      component: ServicesPage
      
    },
    {
      path: '/contact/',
      name: 'contact',
      component: ContactPage
      
    }
   
  ]
})

export default router
