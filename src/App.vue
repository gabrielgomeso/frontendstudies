<template>
  <link rel="icon" type="image/x-icon" href="../assets/favicon-32x32.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700&display=swap" rel="stylesheet"> 
  
  <TheHomeButton></TheHomeButton>
  <router-view></router-view>
</template>

<script>
  import TheHomeButton from './components/TheHomeButton.vue';

  export default {
    components: {
      TheHomeButton
    }
  }
</script>

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
