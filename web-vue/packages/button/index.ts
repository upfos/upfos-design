import { App } from 'vue'
import Button from './src/index.vue'
import ButtonGroup from './src/button-group.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
  app.component(ButtonGroup.name, ButtonGroup)
}
export { ButtonGroup }

export default Button