/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import Timetable from "../views/Timetable.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: Timetable,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/",
    name: "Timable",
    component: Timetable,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/createTimetable",
    name: "Timable",
    component: () => import("@/views/CreateTimetable.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/signUp",
    name: "Sign up",
    component: () => import("@/views/SignUp.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});
export default router;
