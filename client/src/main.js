import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueSweetalert2)
Vue.use(Popper)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
