import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { accountRoutes } from "@/Account/router/account.routes";

const routes: Array<RouteRecordRaw> = [...accountRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
