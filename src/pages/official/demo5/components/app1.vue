<template>
<div>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
export default {
    // demo2 普通提交
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        decrement() {
            this.$store.commit('decrement')
        }
    }
}
</script>

<style>
</style>
