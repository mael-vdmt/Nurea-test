import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import PatientDetails from '@/views/PatientDetails.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/patient/:id',
    name: 'Patient',
    component: PatientDetails,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
