<template></template>

<script>
export default {
  name: 'FunctionProp',
  props: {
    clickFunction: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style>
</style>