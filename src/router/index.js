import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: Home
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/signUp",
    name: "Sign up",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/lessons",
    name: "Lessons",
    component: () => import("../views/Lessons.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
