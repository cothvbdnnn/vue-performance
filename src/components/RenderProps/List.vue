<template>
  <div v-html="render(count)" />
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  beforeMount() {
    this.$options.loop = setInterval(() => {
      this.count += 1;
    }, 1000); 
    this.$on('hook:beforeDestroy', () => {
      clearInterval(this.$options.loop)
    })
  },
  props: {
    render: {
      type: Function,
    }
  }
}
</script>

<style>
</style>