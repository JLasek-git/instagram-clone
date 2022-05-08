import { createApp } from "vue";
import App from "./App.vue";
import router from "./Global/router";
import store from "./Global/store";

createApp(App).use(store).use(router).mount("#app");
