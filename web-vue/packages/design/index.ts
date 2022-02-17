import { App } from 'vue'
import Icon from '@upfos/icon'
import Button, { ButtonGroup } from '@upfos/button'
import Label from '@upfos/label'

const components = [
  Icon, 
  Button, 
  ButtonGroup,
  Label,
];
const install = (app: App): void => {
  components.forEach((component) => {
    // 注册组件
    app.component(component.name, component);
  });
};

export {
  Icon,
  Button,
  ButtonGroup,
  Label
}

export default install