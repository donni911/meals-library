import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";

import messages from "./lang";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "ua",
    messages,
});

createApp(App).use(router).use(store).use(i18n).mount("#app");
