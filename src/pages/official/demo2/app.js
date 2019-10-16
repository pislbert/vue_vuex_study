import Vue from 'vue'
import App from './app.vue'
import store from './store'

// 最基本的 Vuex 记数应用

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
