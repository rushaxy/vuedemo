<template>
  <div class="home">
    <h2>home.vue</h2>
    <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld msg="Welcome to MY Vue.js App"/> 
   <router-view/>
  </div>
</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>