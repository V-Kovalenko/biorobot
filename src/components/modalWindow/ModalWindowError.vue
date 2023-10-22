<script setup>
const emit = defineEmits(["emitCloseModalWindowError"]);
const sendEmitClose = () => {
  emit("emitCloseModalWindowError");
};
</script>

<template>
  <div class="error"  @click.self="sendEmitClose">
    <div class="error__container">
      <img
        class="error__coin"
        src="@/assets/images/wallet/coin.svg"
        alt="Exit"
      />
      <div class="error__content">
        <h2 class="error__title">Количество монет ограничено</h2>
        <p class="error__text info-text">
          Вы не можете нацыганить более 100 монет biorobo
        </p>
      </div>
      <img
        class="error__exit"
        src="@/assets/images/wallet/exit.png"
        alt="exit"
        @click="sendEmitClose"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
@import "@/assets/scss/mixin";
.error {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 150;

  background: rgba(26, 26, 26, 0.7);
  top: 0;
  left: 0;
  &__container {
    position: relative;
    max-width: 496px;
    background: $color-h2;
    min-height: 240px;
    display: flex;
    border-radius: 10px;
    @media screen and (min-width: 768px) {
      width: 496px;
      justify-content: center;
      align-items: center;
      column-gap: 29px;
    }
    @media screen and (max-width: 767px){
      width: 236px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      padding: 0;
      gap: 10px;

    }
  }
  &__coin {
    margin-top: 30px;
    width: 43px;
    height: 52px;
    @media screen and (min-width: 768px){
      display: grid;
      justify-self: start;
      align-self: start;
      margin-top: 48px;
    }
  }
  &__content {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    @media screen and (min-width: 768px){
      row-gap: 23px;
    }
    @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  &__title {
    color: #212529;
    max-width: 320px;
    @media screen and (max-width: 767px){
      @include font-style(18, 24, 600);
      text-align: center;

    }
  }
  &__text {
    max-width: 306px;
    color: #4c5865;
    font-weight: 600;
    @media screen and (max-width: 767px){
      @include font-style(14, 20, 600);
      text-align: center;
      margin-bottom: 30px;
    }
  }
  &__exit {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    right: 8px;
  }
}
</style>
