<template>
    <div>
        <h1>普通方式</h1>
        <app1></app1>
        <h1>载荷，额外参数</h1>
        <app2></app2>
        <h1>载荷，额外对象</h1>
        <app3></app3>
        <h1>载荷，对象风格</h1>
        <app4></app4>
        <h1>添加属性</h1>
        <app5></app5>
        <h1>使用常量作为mutation</h1>
        <app6></app6>
        <h1>映射mutation</h1>
        <app7></app7>
    </div>
</template>

<script>
import app1 from './components/app1.vue'
import app2 from './components/app2.vue'
import app3 from './components/app3.vue'
import app4 from './components/app4.vue'
import app5 from './components/app5.vue'
import app6 from './components/app6.vue'
import app7 from './components/app7.vue'

export default {
    components: {
        app1,
        app2,
        app3,
        app4,
        app5,
        app6,
        app7
    }
}
</script>

<style>
</style>
