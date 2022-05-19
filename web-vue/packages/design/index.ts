import { App } from 'vue'
import Loading from '../loading/src/index.vue'
import Icon from '../icon/src/index.vue'
import Button from '../button/src/index.vue'
import ButtonGroup from '../button/src/button-group.vue'
import Label from '../label/src/index.vue'
import Pagination from '../pagination/src/index.vue'

const components = [
  Loading,
  Icon,
  Button,
  ButtonGroup,
  Label,
  Pagination,
];

const install = (app: App): void => {
  if ((install as any).installed) return;
  (install as any).installed = true;
  components.forEach((component) => {
    // 注册组件
    app.component(component.name, component);
  });
};

// 支持使用标签的方式引入Vue全局变量时，自动install
if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue);
}

// export default {
//   install,
// };

export {
  install,
  Loading,
  Icon,
  Button,
  ButtonGroup,
  Label,
  Pagination,
}

export default install