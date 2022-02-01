<template>
  <div class="card">
    <figure>
      <img
        class="card-image"
        src="../assets/image-qr-code.png"
        alt="QR Code to Frontend Mentor"
      />
    </figure>
    <h1 class="card-title">
      Improve your front-end skills by building projects
    </h1>
    <p class="card-description">
      Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level
    </p>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.card {
  max-width: 320px;
  padding: 1.25rem;

  background-color: hsl(0, 0%, 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Outfit", sans-serif;
  text-align: center;

  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);

  &-image {
    max-width: 290px;
    border-radius: 15px;
  }

  &-title {
    padding: 15px 10px;

    font-weight: 700;
    font-size: 22px;
    color: hsl(218, 44%, 22%);
  }

  &-description {
    padding: 0px 10px 20px 10px;

    color: hsl(220, 15%, 55%);
    font-weight: 400;
    font-size: 15px;
  }
}
</style>