<template>
  <div>
    <h1>Home</h1>
    <p><a href="javascript:void(0)" @click="handleOpen">Open Dialog</a></p>
    <router-link to="/category"><p>Go to Category</p></router-link>
    <router-link to="/render-props"><p>Render Props</p></router-link>
    <example-dialog v-if="callDialog" ref="dialog" />
  </div>
</template>

<script>
const ExampleDialog = () => import(/* webpackChunkName: "ExampleDialog" */ '../components/ExampleDialog.vue');

export default {
  name: 'Home',
  data() {
    return { 
      callDialog: false,
    }
  },
  components: {
    ExampleDialog,
  },
  methods: {
    handleOpen() {
      this.callDialog = true;
      setTimeout(() => {
        this.$refs.dialog.handleOpen();
      }, 100)
    }
  }
}
</script>

<style>
</style>