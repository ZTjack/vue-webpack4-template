import Vue from 'vue'
import '@/styles/normalize/base.scss' // global css
import App from './App'
import router from './router'
import store from './vuex/store'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
