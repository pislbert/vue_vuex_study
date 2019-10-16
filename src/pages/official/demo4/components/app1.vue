<template>
    <div>
        <div>done todo count is {{doneTodosCount}}</div>
        <div>done todo count2 is {{doneTodosCount2}}</div>
        <div> id 为 2 的 is {{getElem}}</div>
    </div>
</template>

<script>
export default {
    computed: {
        // computed 会自动监视计数，data还要赋值才行
        doneTodosCount() {
            return this.$store.getters.doneTodos.length
        },
        doneTodosCount2() {
            return this.$store.getters.doneTodosCount
        },
        getElem() {
            return this.$store.getters.getTodoById(2)
        }
    }
}
</script>

<style>
</style>
