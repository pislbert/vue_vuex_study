<template>
    <div>
        <h1>App1</h1>
        <app1></app1>
        <h1>App2</h1>
        <app2></app2>
    </div>
</template>

<script>
import app1 from './components/app1.vue'
import app2 from './components/app2.vue'

export default {
    components: {
        app1,
        app2
    }
}
</script>

<style>
</style>
