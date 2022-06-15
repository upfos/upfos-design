import { App } from 'vue'
import Pagination from './src/index.vue'

Pagination.install = (app: App) => {
  app.component(Pagination.name, Pagination)
  return app
}

export default Pagination