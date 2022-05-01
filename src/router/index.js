import { createRouter, createWebHistory } from 'vue-router'
import VosAmis from '../views/VosAmis.vue'

const routes = [
  {
    path: '/vosamis',
    name: 'VosAmis',
    component: VosAmis,
    // children: [
    //   {
    //     // UserProfile will be rendered inside User's <router-view>
    //     // when /user/:id/profile is matched
    //     path: '/users',
    //     component: UserProfile,
    //   },
    // ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
