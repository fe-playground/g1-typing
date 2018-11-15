import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import './utils/filters';

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
