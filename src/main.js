import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios';

import {initialize} from './helper/initialization'

import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: process.env.VUE_APP_API_BASE_URL, // Your API domain
//   tokenPath: 'p_token',
//   tokenName: 'token',
  providers: {
    github: {
      clientId: process.env.VUE_APP_GITHUB_CLIENT_ID,
      redirectUri: process.env.VUE_APP_APP_URL + '/oauth/complete/github/' // Your client app URL
    },
    bitbucket: {
        clientId: process.env.VUE_APP_BITBUCKET_CLIENT_ID,
        redirectUri: process.env.VUE_APP_APP_URL + '/oauth/complete/bitbuket/' // Your client app URL
      }
  }
})
//Use the window object to make it available globally.
window.axios = axios;
initialize(store, router)

Vue.use(BootstrapVue)
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueCroppie from 'vue-croppie';
import 'croppie/croppie.css'
Vue.use(VueCroppie);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
