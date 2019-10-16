<template>
<div>
  <p>{{ count }}</p>
  <p>局部交互{{ func1 }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
import { mapState } from 'vuex'

// 不混入方式
export default {
  data() {
    return {
      interCount: 4
    }
  },
  // 与局部交互必须使用常规函数
  computed: {
    /* eslint-disable */
    ...mapState([
      'count'
    ]),
    /* eslint-enable */
    func1() {
      return this.interCount + this.$store.state.count
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
