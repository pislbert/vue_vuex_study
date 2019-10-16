import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_NUM, MINUS_NUM } from './mutation_types'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        obj: {
            a: 1
        }
    },
    mutations: {
        // 基本
        increment: state => state.count++,
        decrement: state => state.count--,
        // 提交载荷（Payload）额外参数
        increment2: (state, n) => (state.count += n),
        decrement2: (state, n) => (state.count -= n),
        // 提交载荷（Payload）额外对象
        increment3: (state, payload) => (state.count += payload.n),
        decrement3: (state, payload) => (state.count -= payload.n),
        // 使用常量替代 Mutation 事件类型
        [ADD_NUM]: state => state.count++,
        [MINUS_NUM](state) {
            return state.count--
        }
    }
})

export default store
