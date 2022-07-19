
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
    component: () => import("../views/admin/Admin.vue"),
  },
  {
    path: '/admin/images',
    name: 'Images',
    component: () => import("../views/admin/Images.vue"),
  },
  {
    path: '/admin/documents',
    name: 'Documents',
    component: () => import("../views/admin/Documents.vue"),
  },
  {
    path: '/admin/videos',
    name: 'Videos',
    component: () => import("../views/admin/Videos.vue")
  },
  {
    path: "/superadmin",
    name: "Superadmin",
    component: () => import("../views/superadmin/SuperAdmin.vue"),
  },
  {
    path: "/superadminform",
    name: "Superadminform",
    component: () => import("../views/superadmin/SuperAdminForm.vue"),
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
  {
    path: "/snake",
    name: "Snake",
    component: () => import("../views/Snake.vue"),
  },
  {
    path: "/tictactoe",
    name: "TicTacToe",
    component: () => import("../views/TicTacToe.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
