<template>
    <div>
        <div>done todo count is {{doneTodosCount.length}}</div>
        <div>done todo count2 is {{doneTodosCount2}}</div>
        <div> id 为 2 的 is {{getElem(2)}}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性： 只能映射，不能像mapState 那么操作
        ...mapGetters({
            doneTodosCount: 'doneTodos',
            doneTodosCount2: 'doneTodosCount',
            getElem: 'getTodoById'
        })
    }
}
</script>

<style>
</style>
