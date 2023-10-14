import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useCoins = defineStore("useCoins", () => {
  const coins = ref(98);
  const textCoins = computed(() => {
    if (coins.value === 1) {
      return "biorobo монета";
    }
    if (coins.value > 1 && coins.value < 5) {
      return "biorobo монеты";
    }
    return "biorobo монет";
  });
  return {
    coins,
    textCoins,
  };
});
export default useCoins;
