import { createRouter, createWebHashHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/tdb",
    name: "Tableau de bord",
    component: () => import("../views/TDB.vue"),
  },
  /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ //'../views/About.vue')
  //}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
