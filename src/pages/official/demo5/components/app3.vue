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
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment3', { n: 10 })
        },
        decrement() {
            this.$store.commit('decrement3', { n: 10 })
        }
    }
}
</script>

<style>
</style>
