import App from "./App.vue";
import { createApp } from "@vue/runtime-dom";
import upfosUI from "../lib/index.esm.js";
import '@upfos/theme-chalk/lib/index.css'

//创建应用，并使用组件库
createApp(App).use(upfosUI).mount("#app");
