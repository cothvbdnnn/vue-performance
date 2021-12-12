<template>
  <div>
    <button @click="test = true">test</button>
    <ComponentC v-if="test" />
  </div>
</template>

<script>
// import ComponentC from './ComponentC.vue'
const ComponentC = () => import(/* webpackChunkName: "component-C" */ './ComponentC.vue');

export default {
  name: 'Categories',
  data() {
    return {
      test: false,
    }
  },
  components: {
    ComponentC
  }
}
</script>

<style>
</style>