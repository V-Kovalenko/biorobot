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

    <div class="wallet__count-money">
      <span class="wallet__number-money">42</span>
      <span class="wallet__text-money">biorobo монет</span>
    </div>

    <span class="wallet__gypsy">Нацыганить</span>
    <label for="gypsy">
      <input id="gypsy" type="checkbox" />
      <span class="wallet__gypsy-5">Цыганить по 5 монет</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
.wallet {
  &__container {
  }
  &__h2 {
  }
  &__money-img {
  }
  &__count-money {
  }
  &__number-money {
  }
  &__text-money {
  }
  &__gypsy {
  }
  &__gypsy-5 {
  }
}
</style>
