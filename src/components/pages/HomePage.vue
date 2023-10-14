<script setup>
import { computed, ref, toRefs, watch, watchEffect } from "vue";
import Header from "@/components/Header.vue";
import Wallet from "@/components/Wallet.vue";
import ModalWindowError from "@/components/modalWindow/ModalWindowError.vue";
import useCoins from "@/stores/useCoins";
import Market from "@/components/Market.vue";

const coinsState = useCoins();
const { coins } = toRefs(coinsState);
const toggleModalWindowError = ref(false);

watch(
  () => coins.value, // отслеживание изменения coins и вызов modalError если coins достигли 100
  (newValue) => {
    if (newValue >= 100) {
      toggleModalWindowError.value = true;
    }
  },
);
const closeModalWindowError = () => {
  toggleModalWindowError.value = false;
};
const showModalError = () => {
  toggleModalWindowError.value = true;
};
</script>

<template>
  <div class="home-page">
    <Header />
    <Wallet
      :state-toggle-modal-window-error="toggleModalWindowError"
      @emitShowError="showModalError"
    />
    <ModalWindowError
      v-show="toggleModalWindowError"
      @emitCloseModalWindowError="closeModalWindowError"
    />
    <Market />
  </div>
</template>

<style scoped lang="scss">
.home-page {
}
</style>
