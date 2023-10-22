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
    max-width: 496px;
    background: $color-h2;
    display: flex;
    padding: 1rem;
    border-radius: 10px;
  }
  &__coin {
    width: 43px;
    height: 52px;
  }
  &__content {
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    margin: 0 30px;
  }
  &__title {
    color: #212529;
    max-width: 320px;
  }
  &__text {
    max-width: 306px;
    color: #4c5865;
    font-weight: 600;
  }
  &__exit {
    width: 16px;
    height: 16px;
    display: inline;
    //position: absolute;
  }
}
</style>
