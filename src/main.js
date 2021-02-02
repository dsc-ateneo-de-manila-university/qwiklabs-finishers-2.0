import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/css/main.css'
import './assets/css/normalize.css'

import firebase from 'firebase';
import '../public/scripts/firebaseInit';

export const bus = new Vue();

Vue.config.productionTip = false


const app = new Vue({
  router,
  render:h => h(App),
})

firebase.auth().onAuthStateChanged(()=>{
  app.$mount('#app');
})


