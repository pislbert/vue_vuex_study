<template>
<div>
  <p>{{ count }}</p>
  <p>count2: {{ count2 }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
import { mapState } from 'vuex'

// 不混入方式 'count' 相当于 state => state.count
export default {
  computed: mapState({
    count: 'count',
    count2: 'count'
  }),
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
