
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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
