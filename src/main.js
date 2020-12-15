import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/css/main.css'
import './assets/css/normalize.css'

export const bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
