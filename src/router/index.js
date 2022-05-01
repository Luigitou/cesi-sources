import { createRouter, createWebHistory } from 'vue-router'
import VosAmis from '../views/VosAmis'
import AjouterUser from '../views/AjouterUser';

const routes = [
  {
    path: '/vosamis',
    name: 'VosAmis',
    component: VosAmis,
  },
  {
    path: '/ajouteruser',
    name: 'AjouterUser',
    component: AjouterUser,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
