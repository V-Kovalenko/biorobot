<script setup>

import UiButton from "@/components/ui/UiButton.vue";
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <img src="@/assets/images/header/headerLogo.png" alt="Logo" class="header__logo">
        <UiButton btn-title="Произвести биоробота" :btn-orange="true"/>
      </div>

      <div class="header__content">
        <div class="content-title">
          <h1 class="header__h1">
            Фабрика по производству биороботов
          </h1>
          <p class="header__text">
            класса «монитор-кресло»
          </p>
        </div>
        <div class="header__content-bg">
          <img src="@/assets/images/header/headerImage.png" alt="Image" class="header__content-img">
        </div>

      </div>

    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__container {
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    display: inline;
    margin: 0;
  }
}
</style>