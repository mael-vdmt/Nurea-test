import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import PatientDetails from '@/views/PatientDetails.vue'
import Presentation from '@/views/Presentation.vue'

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
    path: '/presentation',
    name: 'Presentation',
    component: Presentation
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
