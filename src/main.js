import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/css/main.css'
import './assets/css/normalize.css'

import firebase from 'firebase';
import '../public/scripts/firebaseInit';

export const bus = new Vue();

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      render: h => h(App),
      router,
    }).$mount('#app')
  }
})


