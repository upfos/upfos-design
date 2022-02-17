import { App } from 'vue'
import Label from './src/index.vue'

Label.install = (app: App): void => {
  app.component(Label.name, Label)
}

export default Label