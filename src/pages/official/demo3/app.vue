<template>
<div id="app">
  <p>{{ count }}</p>
  <div>
    <h1>App1</h1>
    <app1></app1>
    <h1>App2</h1>
    <app2></app2>
    <h1>App3</h1>
    <app3></app3>
    <h1>App4</h1>
    <app4></app4>
    <h1>App5</h1>
    <app4></app4>
  </div>
</div>
</template>

<script>
import app1 from './components/app1.vue'
import app2 from './components/app2.vue'
import app3 from './components/app3.vue'
import app4 from './components/app4.vue'
import app5 from './components/app5.vue'

export default {
  components: {
    app1,
    app2,
    app3,
    app4,
    app5
  }
}
</script>

<style>
</style>
