import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import "quasar/src/css/index.sass";

import "@quasar/extras/material-icons/material-icons.css";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.use(createPinia());
myApp.use(router);

myApp.mount("#app");
