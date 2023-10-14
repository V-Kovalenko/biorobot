<script setup>
const emit = defineEmits(["emitCloseModalWindowError"]);
const sendEmitClose = () => {
  emit("emitCloseModalWindowError");
};
</script>

<template>
  <div class="error">
    <div class="error__container">
      <img
        class="error__coin"
        src="@/assets/images/wallet/coin.png"
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
.error {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

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
    grid-template-rows: repeat(2, 1fr);
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
  }
}
</style>
