import { App } from 'vue'
import Label from './src/index.vue'

Label.install = (app: App) => {
  app.component(Label.name, Label)
  return app
}

export default Label