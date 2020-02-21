// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@byzanteam/carbonium/dist/carbonium.css'
import './assets/style/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;
axios.defaults['baseURL'] = 'https://youe.lzdcic.com/v1/components'
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
