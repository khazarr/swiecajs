import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})
Vue.use(VueParticles)
export { app, router, store }
