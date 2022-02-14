import { App } from 'vue'
import Button, { ButtonGroup } from '@upfos/button'

const components = [Button, ButtonGroup];
const install = (app: App): void => {
  components.forEach((component) => {
    //注册组件
    app.component(component.name, component);
  });
};

export {
  Button
}

export default install