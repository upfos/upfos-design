import { App } from 'vue'
import Icon from '@upfos/icon'
import Button, { ButtonGroup } from '@upfos/button'

const components = [
  Icon, 
  Button, 
  ButtonGroup
];
const install = (app: App): void => {
  components.forEach((component) => {
    //注册组件
    app.component(component.name, component);
  });
};

export {
  Icon,
  Button,
  ButtonGroup
}

export default install