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
  {
    path: "/vosfichiers",
    name: "Vos Fichiers",
    component: () => import("../views/VosFichiers.vue"),
  },
  {
    path: "/vosgroupes",
    name: "Vos Groupes",
    component: () => import("../views/VosGroupes.vue"),
  },
  {
    path: "/vosamis",
    name: "Vos Amis",
    component: () => import("../views/VosAmis.vue"),
  },
  {
    path: "/VosFavoris",
    name: "Vos Favoris",
    component: () => import("../views/VosFavoris.vue"),
  },
  {
    path: "/fichiersrecents",
    name: "Fichiers recents",
    component: () => import("../views/FichiersRecent.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/superadmin",
    name: "Super Admin",
    component: () => import("../views/SuperAdmin.vue"),
  },
  {
    path: "/superadminform",
    name: "Super Admin Form",
    component: () => import("../views/SuperAdminForm.vue"),
  },
  {
    path: "/listeusers",
    name: "Liste Users",
    component: () => import("../views/ListeUsers.vue"),
  },
  {
    path: "/gestionressources",
    name: "Gestion Ressources",
    component: () => import("../views/GestionRessource.vue"),
  },
  {
    path: "/search/:param",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/Inscription",
    name: "Inscription",
    component: () => import("../views/Inscription.vue"),
  },
  {
    path: "/statistique",
    name: "Statistique",
    component: () => import("../views/Statistique.vue"),
  },
  {
    path: "/Moderateur",
    name: "Moderateur",
    component: () => import("../views/Moderateur.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () => import("../views/Profil.vue"),
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

import store from "../store/index";

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/' && to.path !== '/Inscription') {
    try {
      if (
        store.state.nom === '' ||
        store.state.prenom === '' ||
        store.state.mail === ''
      ) {
        next('/');
      } else {
        next();
      }
    } catch (e) {
      console.error(e);
    }
  } else if (to.path === '/') {
    if (
      store.state.mail !== ''
    ) {
      next('/tdb');
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
