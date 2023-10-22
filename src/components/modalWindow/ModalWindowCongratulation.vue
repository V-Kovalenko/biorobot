<script setup>
const emit = defineEmits(["emitCloseModalWindowCongratulation"]);
const sendEmitClose = () => {
  emit("emitCloseModalWindowCongratulation");
};
</script>

<template>
  <div class="congratulation" @click.self="sendEmitClose">
    <div class="congratulation__container">
      <div class="congratulation__content">
        <h2 class="congratulation__title">Биоробот произведён</h2>
        <p class="congratulation__text info-text">
          Поздравляем! Вы произвели биоробота
        </p>
      </div>
      <img
          class="congratulation__exit"
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

.congratulation {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 150;

  //background: #1a1a1a;
  background: rgba(26, 26, 26, 0.7);
  top: 0;
  left: 0;

  &__container {
    position: relative;
    //max-width: 496px;
    min-width: 496px;
    background: $color-h2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
      min-width: 236px;
      row-gap: 20px;
      padding: 30px 0;
    }

  }

  &__coin {
    width: 43px;
    height: 52px;
  }

  &__content {
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: start;
    margin-top: 33px;
    margin-bottom: 40px;
    row-gap: 23px;

    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      column-gap: 10px;
      text-align: center;
    }
  }

  &__title {
    color: #212529;
    max-width: 200px;

  }

  &__text {
    text-align: start;
    max-width: 236px;
    color: #4c5865;
    font-weight: 600;
    @media screen and (max-width: 767px) {
      @include font-style(14, 20, 600);
      text-align: center;
      margin: 0 10px;

    }
  }

  &__exit {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    @media screen and (max-width: 767px){
      top: 12px;
      right: 12px;
    }
  }
}
</style>
