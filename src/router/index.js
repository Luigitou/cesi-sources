
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
    path: "/inscription",
    name: "Inscription",
    component: () => import("../views/Inscription.vue"),
  },
  {
    path: "/vosamis",
    name: "Vos amis",
    component: () => import("../views/VosAmis.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path:"/profil",
    name: "Profil",
    component: () => import("../views/Profil.vue"),
  },
  {
    path: "/vosFichiers",
    name: "Vos Fichiers",
    component: () => import("../views/VosFichiers.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
