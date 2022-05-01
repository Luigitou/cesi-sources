import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
