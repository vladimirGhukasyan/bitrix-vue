import Vue from 'vue'
import App from './App.vue'
import router from './router';


Vue.config.productionTip = false
import axios from 'axios'

window.axios = axios;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
