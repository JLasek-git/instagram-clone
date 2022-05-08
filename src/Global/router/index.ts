import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { accountRoutes } from "@/Account/router/account.routes";
import { appRoutes } from "@/App/router/app.routes";

const routes: Array<RouteRecordRaw> = [...accountRoutes, ...appRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
