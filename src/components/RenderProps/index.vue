<template>
  <div>
    <List :render="renderH1" />
    <List :render="renderP" />
  </div>
</template>

<script>
import List from '../RenderProps/List.vue';

export default {
  components: {
    List,
  },
  methods: {  
    renderH1(count) {
      return (
        `<h1>h1 Counter: ${ count }</h1>`
      )
    },
    renderP(count) {
      return (
        `<p>p Counter: ${ count }</p>`
      )
    }
  }
}
</script>

<style>
</style>