<template>
  <section class="main">
    <h1 class="page-title">Projetos de Estudo Frontend</h1>

    <section class="projects">
        <TheProjectCard></TheProjectCard>
        <TheProjectCard></TheProjectCard>
        <TheProjectCard></TheProjectCard>
        <TheProjectCard></TheProjectCard>
        <TheProjectCard></TheProjectCard>
        <TheProjectCard></TheProjectCard>
    </section>
  </section>

</template>
<script>
  import TheProjectCard from '../components/TheProjectCard.vue';

  export default {
    components: {
      TheProjectCard
    }
  }
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  max-width: 100vw;

  .page-title{
    padding: 20px;
  }
  .projects{ 
    max-width: 80vw;
    width: 1240px;
    
    padding: 20px;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    width: 100%;

  }
}
</style>