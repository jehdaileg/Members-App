import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.css';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { fas } from '@fortawesome/fontawesome-svg-core';
//import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//library.add(fas, fab);

library.add(fas, fab);

createApp(App)
.use(store)
.use(router)
.component('fa', FontAwesomeIcon)
.mount("#app");
