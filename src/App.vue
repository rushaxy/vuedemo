<template>
  <div id="app1">
    <img width="50" height="50" src="./assets/logo.png">
    <h1>app.vue</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/page">Table</router-link>
    <router-link to="/Demo">Demo</router-link>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'App1'
}
</script>

<style>

#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4e2c64;
  margin-top: 10px;
  margin-bottom: 100px;
}
</style>
