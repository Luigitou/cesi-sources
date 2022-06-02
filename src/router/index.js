
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () => import("../views/Accueil.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/vosamis',
    name: 'VosAmis',
    component: () => import("../views/VosAmis.vue"),
  },
  // {
  //   path: '/ajouteruser',
  //   name: 'AjouterUser',
  //   component: () => import("../views/AjouterUser.vue"),
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
