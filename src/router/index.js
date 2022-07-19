
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
    path: "/profil",
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
  },
  {
    path: "/fichier/:id",
    name: "File",
    component: () => import("../views/File.vue")
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

import store from "../store/index";

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/' && to.path !== '/Inscription') {
    try {
      if (
        store.state.token === null
      ) {
        next('/');
      } else {
        next();
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    next();
  }
});

export default router;
