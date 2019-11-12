import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        // 注册简单action
        increment(context) {
            context.commit("increment")
        },
        increment2({ commit }) {
            commit("increment")
        },
        // action 可以异步提交
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit("increment")
            }, 1000)
        }
    }
})

export default store
