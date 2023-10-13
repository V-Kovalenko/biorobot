<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UiButton from "@/components/ui/UiButton.vue";
</script>

<template>
  <div class="app container">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.app {

}
.container {
  max-width: 1016px;
  margin: 0 auto;

}
</style>
