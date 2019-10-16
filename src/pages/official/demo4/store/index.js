import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
            { id: 4, text: '...', done: true }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        // 可直接用getters参数
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        // 返回值是一个函数
        getTodoById: state => id => {
            return state.todos.find(todo => todo.id === id)
        }
    }
})

export default store
