<template>
<div>
  <p>{{ obj1 }}</p>
  <p>{{ obj2 }}</p>
</div>
</template>

<script>
import Vue from 'vue'

export default {
    // Mutation 需遵守 Vue 的响应规则
    data() {
        return {
            obj1: this.getObj(),
            obj2: this.getObj2()
        }
    },
    methods: {
        getObj() {
            // 原始对象
            window.console.log(this.$store.state.obj)

            // 添加新属性
            Vue.set(this.$store.state.obj, 'b', 2)

            return this.$store.state.obj
        },
        getObj2() {
            // 原始对象
            window.console.log(this.$store.state.obj)

            // 添加新属性
            this.$store.state.obj = {
                ...this.$store.state.obj,
                c: 3
            }

            return this.$store.state.obj
        }
    }
}
</script>

<style>
</style>
