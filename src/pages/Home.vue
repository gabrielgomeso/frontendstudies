<template>
  <section class="main">
    <h1 class="page-title">Projetos de Estudo Frontend</h1>

    <section class="projects">
        <router-link to="/code">
          <TheProjectCard
            projectName='QR Code Card'
            projectDescription='A simple card to display a QR Code'
          ></TheProjectCard>
        </router-link>

        <router-link to="/nft">
          <TheProjectCard
            projectName='NFT Card'
            projectDescription='A simple card to display a NFT info'
          ></TheProjectCard>
        </router-link>
    </section>
  </section>

</template>
<script>
  import TheProjectCard from '../components/TheProjectCard.vue';

  export default {
    components: {
      TheProjectCard
    },
  }
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 25px;

  min-height: 100vh;
  max-width: 100vw;

  .page-title{
    padding: 20px;
    text-align: center;
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

  a {
    text-decoration: none;
  }

  @media (max-width: 800px) {
    .projects{
      display: flex;
      flex-direction: column;
    }
  }
}
</style>