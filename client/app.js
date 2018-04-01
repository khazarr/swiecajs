import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import VueMq from 'vue-mq'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})
Vue.use(VueParticles)
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})
export { app, router, store }
