// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './stylus/reset.styl'
import './utils/rem.js'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Toast } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import './assets/common/stylus/index.styl'
import store from './store'
import axiosApi from './utils/ajax.js'

Vue.use(VueLazyload)
Vue.use(Mint);
Vue.use(axiosApi);
Vue.$toast = Vue.prototype.$toast = Toast;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
