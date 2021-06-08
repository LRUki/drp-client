import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/users/Profile.vue";
import Space from "../views/space/Space.vue";
import CreateSpace from "../views/space/CreateSpace.vue";
import Event from "../views/space/Event.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/users/:id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/space/create",
    name: "CreateSpace",
    component: CreateSpace,
  },
  {
    path: "/space/:id",
    name: "Space",
    component: Space,
  },
  {
    path: "/event/:id",
    name: "Event",
    component: Event
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
