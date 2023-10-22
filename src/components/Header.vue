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
        <a href="/#produce">
          <UiButton
              btn-title="Произвести биоробота"
              variant="orange"
              class="header__button"
          />
        </a>
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
@import "@/assets/scss/colors";

.header {

  &__container {
    @media screen and (max-width: 1023px) {
      margin: 0 0 80px 0;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 120px 0;

    @media screen and (max-width: 767px) {
      margin-bottom: 60px;
      justify-content: center;
    }
  }

  &__logo {
    display: inline;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &__button {
    color: $color-h2;
    @media screen and (max-width: 767px) {
      //margin: 0;
    }
  }

  &__content {
    padding-left: 130px;
    display: flex;
    //justify-content: space-between;
    align-items: center;
    grid-column-gap: 120px;
    @media screen and (max-width: 1919px) {
      padding-left: unset;
    }
    @media screen and (max-width: 1023px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }
  }

  &__content-title {
    max-width: 470px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
    @media screen and (max-width: 767px) {
      order: 2;
    }
  }

  &__h1 {
    color: $color-h2;
    @media screen and (max-width: 1023px) {
      max-width: 259px;
    }
    @media screen and (max-width: 767px) {
      max-width: 236px;
      order: 2;
      text-align: center;
    }
  }

  &__text {
    @include font-style(24, 32, 600);
    color: #a3b8cc;
    @media screen and (max-width: 1919px) {
      @include font-style(18, 24, 600);
    }
    @media screen and (max-width: 1023px) {
      @include font-style(14, 20, 600);
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &__content-bg {
    position: relative;
    width: 275px;
    height: 275px;
    background: #1e2936;
    border-radius: 100%;

    @media screen and (max-width: 1919px) {
      width: 177px;
      height: 177px;
    }
    @media screen and (max-width: 767px) {
      order: 1;
      margin-bottom: 30px;
    }
  }

  &__content-img_blue {
    max-width: 176.49px;
    max-height: 309.31px;
    position: absolute;
    top: -7px;
    left: -23px;
    @media screen and (max-width: 1919px) {
      max-width: 113px;
      max-height: 199px;
      left: -13px;
    }
  }

  &__content-img_orange {
    max-width: 138.35px;
    max-height: 195.89px;
    position: absolute;
    top: 95px;
    left: 163px;
    @media screen and (max-width: 1919px) {
      max-width: 89px;
      max-height: 126px;
      top: 59px;
      left: 105px;
    }
  }
}
</style>
