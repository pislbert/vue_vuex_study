import Vue from "vue"
import App from "./app.vue"
import store from "./store"

// 简单的 Vue 计数

new Vue({
    el: "#app",
    store,
    render: h => h(App)
})
