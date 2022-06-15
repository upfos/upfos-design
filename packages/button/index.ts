import { App, Plugin } from 'vue'
import Button from './src/index.vue'
import ButtonGroup from './src/button-group.vue'

Button.Group = ButtonGroup

Button.install = (app: App) => {
  app.component(Button.name, Button)
  app.component(ButtonGroup.name, ButtonGroup)
  return app
}
export { ButtonGroup }

// export default Button
export default Button as typeof Button as Plugin & {
  readonly Group: typeof ButtonGroup
}