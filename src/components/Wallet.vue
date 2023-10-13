<script setup></script>

<template>
  <div class="wallet">
    <div class="wallet__container" />
    <h2 class="wallet__h2">Кошелёк криптовалют</h2>
    <img
      src="@/assets/images/wallet/coin.png"
      alt=""
      class="wallet__money-img"
    />

    <div class="wallet__count-money money">
      <span class="wallet__number-money money">42</span>
      <span class="wallet__text-money money">biorobo монет</span>
    </div>

    <div class="wallet__gypsy text">
      <span class="wallet__gypsy-1">Нацыганить</span>
      <label for="gypsy" class="wallet__label">
        <input type="checkbox" class="wallet__input" />
        <span class="wallet__gypsy-5">Цыганить по 5 монет</span>
        <span id="gypsy" class="wallet__checkbox-border" />
        <!--        <span class="wallet__img-checked" />-->
        <img
          src="@/assets/images/wallet/checked.png"
          alt=""
          class="wallet__img-checked"
        />
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
.wallet {
  margin-bottom: 104px;
  &__container {
    display: flex;
  }
  &__h2 {
    margin-bottom: 60px;
  }
  &__money-img {
    margin-bottom: 24px;
  }
  &__count-money {
    margin-bottom: 44px;
    display: flex;
    gap: 10px;
  }
  &__number-money {
    font-weight: 700;
  }
  &__text-money {
  }
  &__gypsy {
    display: flex;
    gap: 27px;
  }
  &__gypsy-1 {
    color: $color-gypsy;
    border-bottom: 1px solid #ff7f2280;
  }
  &__label {
    position: relative;
  }
  &__checkbox-border {
    width: 24px;
    height: 24px;
    border: 2px solid #a3b8cc;
    position: absolute;
    top: 0;
    left: -5px;
    z-index: -1;
  }
  &__img-checked {
    position: absolute;
    top: 5px;
    left: 0;
  }
  &__input {
    opacity: 0;
  }
  &__gypsy-5 {
    margin-left: 8px;
    color: $color-h2;
  }
}
</style>
