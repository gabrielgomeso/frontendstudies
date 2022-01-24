<script setup>
  import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <link rel="icon" type="image/x-icon" href="../assets/favicon-32x32.png">
  <TheNavbar></TheNavbar>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
