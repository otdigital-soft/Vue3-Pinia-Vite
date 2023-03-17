import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n.ts";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "@/assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
