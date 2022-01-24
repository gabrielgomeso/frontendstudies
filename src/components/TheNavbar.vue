<template>
  <nav class="nav">
    <ul class="nav-link-list">
      <li class="nav-link-list--item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-link-list--item">
        <router-link to="/code">QR Code Component</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style lang="scss" scoped>
.nav{
  width: 100vw;

  &-link-list {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    gap: 15px;

    &--item {
      a {
        text-decoration: none;
      }
    }
  }
}
</style>