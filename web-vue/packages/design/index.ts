import { App } from 'vue'
import Button from '@upfos/button'

const components = [ Button ];
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