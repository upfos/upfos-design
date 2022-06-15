import { App } from 'vue'
import Loading from './src/index.vue'

Loading.install = (app: App) => {
  app.component(Loading.name, Loading)
  return app
}

export default Loading