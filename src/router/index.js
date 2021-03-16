import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import HomeApp1 from "@/views/app1/HomeApp1";
import ProfileApp1 from "@/views/app1/ProfileApp1";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/homeapp1",
    name: "HomeApp1",
    component: HomeApp1
  },
  {
    path: "/homeapp1/:username",
    name: "Profile",
    component: ProfileApp1
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
