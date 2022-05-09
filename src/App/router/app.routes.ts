import { RouteRecordRaw } from "vue-router";
import { AppRoutesEnum } from "../enums/AppRoutes/appRoutesEnum";
import { AppRoutesNamesEnum } from "../enums/AppRoutes/appRoutesNamesEnum";

export const appRoutes: Array<RouteRecordRaw> = [
  {
    path: AppRoutesEnum.HomePage,
    name: AppRoutesNamesEnum.HomePage,
    component: () => import("@/App/views/HomePage/HomePage.vue"),
    meta: {
      isNavbarVisible: true,
    },
  },
  {
    path: AppRoutesEnum.Explore,
    name: AppRoutesNamesEnum.Explore,
    component: () => import("@/App/views/Explore/ExplorePage.vue"),
    meta: {
      isNavbarVisible: true,
    },
  },
  {
    path: AppRoutesEnum.Inbox,
    name: AppRoutesNamesEnum.Inbox,
    component: () => import("@/App/views/Inbox/InboxPage.vue"),
    meta: {
      isNavbarVisible: true,
    },
  },
];
