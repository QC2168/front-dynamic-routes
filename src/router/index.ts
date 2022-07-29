import { createRouter, createWebHistory } from "vue-router";
import pinia from "../store";
import useUser from "../store/user";
import { basicRoutes, dynamicRoutes } from "./routes";
export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes: [...basicRoutes], // `routes: routes` 的缩写
});

export const initRoute = async () => {
  // 获取权限
  const role = localStorage.getItem("role");
  if (!role) return;
  dynamicRoutes.forEach(async (item) => {
    if (item.meta?.permission.includes(role!)) {
      await router.addRoute(item);
    }
  });
};

await initRoute();
router.beforeEach((to, from) => {
  console.log(router.getRoutes());
});
