import { RouteRecordRaw } from "vue-router";
import { LoginRoutesEnum } from "../enums/LoginRoutesEnums/LoginRoutesEnum";
import { LoginRoutesNamesEnum } from "../enums/LoginRoutesEnums/LoginRoutesNamesEnum";

export const accountRoutes: Array<RouteRecordRaw> = [
  {
    path: LoginRoutesEnum.Login,
    name: LoginRoutesNamesEnum.Login,
    component: () => import("@/Account/views/Login/LoginView.vue"),
    meta: {
      isNavbarVisible: false,
    },
  },
  {
    path: LoginRoutesEnum.Register,
    name: LoginRoutesNamesEnum.Register,
    component: () => import("@/Account/views/Register/RegisterView.vue"),
    meta: {
      isNavbarVisible: false,
    },
  },
  {
    path: LoginRoutesEnum.ForgotPassword,
    name: LoginRoutesNamesEnum.ForgotPassword,
    component: () =>
      import("@/Account/views/ForgotPassword/ForgotPasswordView.vue"),
    meta: {
      isNavbarVisible: false,
    },
  },
];
