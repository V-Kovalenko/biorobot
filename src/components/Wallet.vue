<script setup>
import { computed, reactive, ref, toRefs } from "vue";
import useCoins from "@/stores/useCoins";
import UiLink from "@/components/ui/UiLink.vue";

const coinsState = useCoins();
const { coins, textCoins } = toRefs(coinsState); // данные монет и текст из store useCoins
const isChecked = ref(false); // состояние checkbox
const incrementCoins = () => {
  if (coins.value <= 100 && !isChecked.value) {
    // увеличить монеты на 1
    coins.value++;
  } else if (isChecked.value && coins.value <= 95) {
    coins.value += 5;
  }
};
const imgCoins = computed(() =>
  // добавление картинок - монеток
  Array(coins.value).fill({
    url: new URL("@/assets/images/wallet/coin.png", import.meta.url),
  }),
);
</script>

<template>
  <div class="wallet">
    <div class="wallet__container" />
    <h2 class="wallet__h2">Кошелёк криптовалют</h2>
    <img
      v-for="(img, idx) in imgCoins"
      :key="idx"
      :src="img.url"
      alt="Coins"
      class="wallet__money-img"
    />

    <div class="wallet__count-money money">
      <span class="wallet__number-money money">{{ coins }}</span>
      <span class="wallet__text-money money">{{ textCoins }}</span>
    </div>

    <div class="wallet__gypsy text">
      <UiLink v-if="coins < 100" @click="incrementCoins" />
      <UiLink v-else :link-disabled="true" />
      <label for="gypsy" class="wallet__label">
        <input v-model="isChecked" type="checkbox" class="wallet__input" />
        <span class="wallet__gypsy-5">Цыганить по 5 монет</span>
        <span id="gypsy" class="wallet__checkbox-border" />
        <!--        <span class="wallet__img-checked" />-->
        <img
          v-if="isChecked"
          src="@/assets/images/wallet/checked.png"
          alt="galka"
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
    //margin-bottom: 24px;
    display: inline;
    width: 16px;
    height: 20px;
    //margin: 0;
  }
  &__count-money {
    margin: 24px 0 44px 0;
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
    cursor: pointer;
    &:hover {
      color: #ff5722;
    }
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
    z-index: -1;
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
