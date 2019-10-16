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
import { mapState } from 'vuex'

// 不混入方式, 名称如果和state.count 相同，方式更简单
export default {
  /* eslint-disable */
  computed: mapState([
    'count'
  ]),
  /* eslint-enable */
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
