<template>

 
 <NavBar />

  <div class="container mx-auto">
    <router-view />
  </div>
 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

</style>

<script>

import NavBar from './components/tools/NavBar.vue';
export default {

  components: {

    NavBar

  }
  
}
</script>
