import { defineClientAppEnhance } from "@vuepress/client";
import "../../packages/theme-chalk/src/index.scss";
// -- APPSTART ITEMS HERE --
import UIcon from "@upfos/icon";
import ULoading from "@upfos/loading";
import UButton from "@upfos/button";
import UButtonGroup from "../../packages/button/src/button-group.vue";
import ULabel from "@upfos/label";

export default defineClientAppEnhance(({ app }) => {
  // -- APPEND ITEMS HERE --
  app.component("UIcon", UIcon);
  app.component("ULoading", ULoading);
  app.component("UButton", UButton);
  app.component("UButtonGroup", UButtonGroup);
  app.component("ULabel", ULabel);
});
