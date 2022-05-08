import { createApp } from "vue";
import App from "./App.vue";
import router from "./Global/router";
import store from "./Global/store";
import "@/Global/styles/main.scss";

createApp(App).use(store).use(router).mount("#app");
