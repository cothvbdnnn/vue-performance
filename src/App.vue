<template>
  <div id="app">
    <router-link to="/">
      <img alt="Vue logo" src="./assets/logo.png" />
    </router-link>
    <div class="container">
      <router-view />
    </div>
    <div class="container">
      <ComponentA />
      <ComponentB />
    </div>
  </div>
</template>

<script>
// import ComponentA from './components/ComponentA.vue'
// import ComponentB from './components/ComponentB.vue'
const ComponentA = () => import(/* webpackChunkName: "component-A" */ './components/ComponentA.vue');
const ComponentB = () => import(/* webpackChunkName: "component-B" */ './components/ComponentB.vue');

export default {
  name: 'App',
  components: {
    ComponentA, 
    ComponentB
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #41b883;
  text-decoration: none;
}
</style>
