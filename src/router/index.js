import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/morelovetodo",
    name: "MoreLoveToDo",
    component: () => import("../views/MoreLoveToDo.vue"),
  },
  {
    path: "/certificate",
    name: "Certificate",
    component: () => import("../views/Certificate.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
