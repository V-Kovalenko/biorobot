<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app container">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/colors.scss";
.app {
  margin: 0 auto;
}
.container {
  max-width: 1016px;
  margin: 0 auto;
}
.container-content {
  //max-width: 756px;
}
</style>
