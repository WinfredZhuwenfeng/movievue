import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import './assests/css/main.css'


new Vue({
  el:'#app',
  router,
  render:c => c(App)
})
