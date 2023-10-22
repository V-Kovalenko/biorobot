<script setup>
import {ref, toRefs} from "vue";
import Header from "@/components/Header.vue";
import Wallet from "@/components/Wallet.vue";
import ModalWindowError from "@/components/modalWindow/ModalWindowError.vue";
import useCoins from "@/stores/useCoins";
import Market from "@/components/Market.vue";
import Stock from "@/components/Stock.vue";
import Production from "@/components/Production.vue";


const coinsState = useCoins();
const {coins} = toRefs(coinsState);
const toggleModalWindowError = ref(false);

const closeModalWindowError = () => {
  toggleModalWindowError.value = false;
};

const showModalError = () => {
  toggleModalWindowError.value = true;
};
const showModalErrorStock = () => {
  if (coins.value >= 100) {
    toggleModalWindowError.value = true;
  }
};
</script>

<template>
  <div class="home-page">
    <div class="home-page__header">
      <Header/>
    </div>
    <div class="home-page__container">
      <Wallet @emitShowError="showModalError"/>
      <ModalWindowError
          v-show="toggleModalWindowError"
          @emitCloseModalWindowError="closeModalWindowError"
      />
      <Market/>
      <Stock @emitShowErrorStock="showModalErrorStock"/>
      <Production/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  &__container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 136px 100px 136px;
    grid-row-gap: 100px;

    @media screen and (max-width: 1919px) {
      grid-row-gap: 90px;
    }

    @media screen and (max-width: 1023px) {
      padding: 0 136px 100px 136px;
      grid-row-gap: 80px;
    }
    @media screen and (max-width: 767px) {
      padding: 0 42px 24px 42px;
      grid-row-gap: 60px;
    }
  }
  &__header {
    margin-bottom: 100px;

    @media screen and (max-width: 1919px) {
      padding: 48px 136px 0 136px;
      margin-bottom: 90px;
    }
    @media screen and (max-width: 1023px) {
      padding: 24px 136px 0 136px;
      margin-bottom: 80px;
    }
    @media screen and (max-width: 767px) {
      padding: 0 42px;
      margin-bottom: 60px;

    }
  }
}
</style>
