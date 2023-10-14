<script setup>
import { computed, ref, toRefs, watch, watchEffect } from "vue";
import Header from "@/components/Header.vue";
import Wallet from "@/components/Wallet.vue";
import ModalWindowError from "@/components/modalWindow/ModalWindowError.vue";
import useCoins from "@/stores/useCoins";

const coinsState = useCoins();
const { coins } = toRefs(coinsState);
const toggleModalWindowError = ref(false);

watch(
  () => coins.value,
  (newValue) => {
    if (newValue >= 100) {
      toggleModalWindowError.value = true;
    }
  },
);
const closeModalWindowError = () => {
  toggleModalWindowError.value = false;
};
</script>

<template>
  <div class="home-page">
    <Header />
    <Wallet />
    <ModalWindowError
      v-show="toggleModalWindowError"
      @emitCloseModalWindowError="closeModalWindowError"
    />
  </div>
</template>

<style scoped lang="scss">
.home-page {
}
</style>
