import Vue from 'vue'
import capitializeFilter from './filters/capitalize-filter'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
sync(store, router)

Vue.filter('capitalize', capitializeFilter)

Vue.config.devtools = true
Vue.config.debug = true

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
