import Button from "@upfos/button"
import { App } from "@vue/runtime-core";

const components = [Button];
const install = (app: App): void => {
  components.forEach((component) => {
    //注册组件
    app.component(component.name, component);
  });
};

export default {
  install,
};
