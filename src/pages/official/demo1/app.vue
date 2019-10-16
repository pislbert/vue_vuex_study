<template>
  <div>
    my test
    this count is {{count}}
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  // name: 'app',
  // data(){
  //   return{
  //     count: this.$store.state.count
  //   }
  // },
  computed:{ // computed 会自动监视计数，data还要赋值才行
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    add(){
      this.$store.commit('increment')
      // this.count = this.$store.state.count
    }
  }
}
</script>

<style>
</style>
