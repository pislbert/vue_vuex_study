import Vue from 'vue'
import App from './app.vue'
import store from './store'

// getter 使用

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
