import { RouteRecordRaw } from "vue-router";
import { AccountRoutesEnum } from "@/Account/enums/LoginRoutesEnums/AccountRoutesEnum";
import { AccountRoutesNamesEnum } from "@/Account/enums/LoginRoutesEnums/AccountRoutesNamesEnum";

export const accountRoutes: Array<RouteRecordRaw> = [
  {
    path: AccountRoutesEnum.Login,
    name: AccountRoutesNamesEnum.Login,
    component: () => import("@/Account/views/Login/LoginView.vue"),
    meta: {
      isNavbarVisible: false,
    },
  },
  {
    path: AccountRoutesEnum.Register,
    name: AccountRoutesNamesEnum.Register,
    component: () => import("@/Account/views/Register/RegisterView.vue"),
    meta: {
      isNavbarVisible: false,
    },
  },
  {
    path: AccountRoutesEnum.ForgotPassword,
    name: AccountRoutesNamesEnum.ForgotPassword,
    component: () =>
      import("@/Account/views/ForgotPassword/ForgotPasswordView.vue"),
    meta: {
      isNavbarVisible: false,
    },
  },
];
