<template>
<div>
  <p>{{ count }}</p>
  <p>
    <button @click="add">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    methods: {
        ...mapMutations({
            add: 'increment'
        }),
        /* eslint-disable */
        ...mapMutations([
            'decrement',
        ])
        /* eslint-enable */
    }
}
</script>

<style>
</style>
