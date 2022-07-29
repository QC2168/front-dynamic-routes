import { RouteRecordRaw } from "vue-router";
export const basicRoutes: RouteRecordRaw[] = [
  {
    name: "notFound",
    path: "/:pathMatch(.*)*",
    meta: {
      permission: ["common", "admin"],
    },
    component: () => import("../pages/404.vue"),
  },
  {
    name: "login",
    path: "/login",
    meta: {
      permission: ["common", "admin"],
    },
    component: () => import("../pages/login.vue"),
  },
  { path: "/", redirect: { name: "login" } },
];
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/home",
    component: () => import("../pages/home.vue"),
    meta: {
      permission: ["common", "admin"],
    },
  },
  {
    name: "news",
    path: "/news",
    component: () => import("../pages/news.vue"),
    meta: {
      permission: ["common", "admin"],
    },
  },
  {
    name: "list",
    path: "/list",
    component: () => import("../pages/list.vue"),
    meta: {
      permission: ["admin"],
    },
  },
];
