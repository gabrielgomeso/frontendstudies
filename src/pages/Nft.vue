<template>
<section class="main">
  <div class="card">
    <figure>
      <img class="card-image" src="../assets/image-equilibrium.jpg" alt="Equilibrium NFT">
    </figure>
    
    <div class="card-text">
      <h3 class="card-text--title">
        Equilibrium #3429
      </h3>

      <p class="card-text--description">
        Our Equilibrium collection promotes balance and calm.
      </p>
    </div>

    <div class="card-info">
      <div class="card-info--value">
        <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
        0.041 ETH
      </div>
      <div class="card-info--remaining-date">
        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg> 
        3 days left
      </div>
    </div>

    <div class="card-creator">
      <figure>
        <img class="card-creator--image" src="../assets/image-avatar.png" alt="NFT Creator">
      </figure>
      <span class="card-creator--name">
        Creation of <span class="card-creator--highlight">Jules Wyvern</span> 
      </span>
    </div>  
  </div>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.gabrielgo.dev" target="_blank">Gabriel Gomes</a>.
  </div>
</section>
  
</template>

<script></script>

<style lang="scss" scoped>
.main {
  color: hsl(0, 0%, 100%);
  width: 100vw;
  
  height: calc(100vh - 18px);

  background-color: hsl(217, 54%, 11%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  font-family: 'Outfit', sans-serif;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    background-color: hsl(216, 50%, 16%);
    border-radius: 15px;
    padding: 20px;

    max-width: 320px;

    box-shadow: 0px 0px 50px 50px hsl(215, 50%, 9%);

    &-image{
      border-radius: 15px;
      max-width: 290px;
      cursor: pointer;

      &:hover {
        color: hsl(178, 100%, 50%);
      }
    }

    &-text{
      &--title {
        color: hsl(0, 0%, 100%);
        font-weight: 600;
        cursor: pointer;

        padding: 10px 0px;

        &:hover {
          color: hsl(178, 100%, 50%);
        }
      }

      &--description {
        font-size: 18px;
        color: hsl(215, 51%, 70%);
        font-weight: 300;

        padding: 0px 0px 20px 0px;
      }
    }

    &-info {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 0 20px 0;

      color: hsl(178, 100%, 50%);

      border-bottom: 1px solid hsl(215, 32%, 27%);

      &--value {
        font-weight: 600; 
      }

      &--remaining-date {
        font-weight: 400;
        color: hsl(215, 51%, 70%);
      }
    }

    &-creator {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 15px;

      color: hsl(215, 51%, 70%);
      font-weight: 300;

      padding: 20px 0 10px 0;

      &--image{
        max-width: 30px;
        border-radius: 50%;
        border: 1px solid hsl(0, 0%, 100%);
      }

      &--highlight {
        color: hsl(0, 0%, 100%);
        cursor: pointer;

        &:hover {
          color: black;
        }
      }
    }
  }
}

</style>