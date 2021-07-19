<template>
  <div>
    <ComponentC />
  </div>
</template>

<script>
import ComponentC from './ComponentC.vue'
// const ComponentC = () => import(/* webpackChunkName: "component-C" */ './ComponentC.vue');

export default {
  name: 'Categories',
  components: {
    ComponentC
  }
}
</script>

<style>

</style>