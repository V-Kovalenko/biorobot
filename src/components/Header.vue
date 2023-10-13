<script setup>
import UiButton from "@/components/ui/UiButton.vue";
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <img
          src="@/assets/images/header/headerLogo.png"
          alt="Logo"
          class="header__logo"
        />
        <UiButton btn-title="Произвести биоробота" :btn-orange="true" />
      </div>

      <div class="header__content">
        <div class="header__content-title">
          <h1 class="header__h1">Фабрика по производству биороботов</h1>
          <p class="header__text">класса «монитор-кресло»</p>
        </div>

        <div class="header__content-bg">
          <img
            src="@/assets/images/header/headerRobotBlue.png"
            alt="robotBlue"
            class="header__content-img_blue"
          />
          <img
            src="@/assets/images/header/headerRobotOrange.png"
            alt="robotOrange"
            class="header__content-img_orange"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/scss/mixin";
.header {
  margin-bottom: 124px;
  &__container {
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 120px;
  }
  &__logo {
    display: inline;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__content-title {
    max-width: 470px;
  }
  &__h1 {
  }
  &__text {
    @include font-style(24px, 32px, 600);
    color: #a3b8cc;
  }
  &__content-bg {
    //display: flex;
    //justify-content: space-between;
    position: relative;
    width: 275px;
    height: 275px;
    background: #1e2936;
    border-radius: 100%;
  }
  &__content-img_blue {
    max-width: 176.49px;
    max-height: 309.31px;
    position: absolute;
    top: -7px;
    left: -23px;
  }
  &__content-img_orange {
    max-width: 138.35px;
    max-height: 195.89px;
    position: absolute;
    top: 95px;
    left: 163px;
  }
}
</style>
