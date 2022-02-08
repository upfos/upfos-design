import Button from "@upfos/button"
import { App } from 'vue'

const components = [Button];
const install = (app: App): void => {
  components.forEach((component) => {
    //注册组件
    app.component(component.name, component);
  });
};

export default {
  install,
}
