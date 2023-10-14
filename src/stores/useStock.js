import { defineStore } from "pinia";
import { reactive, ref } from "vue";

const useStock = defineStore("useStock", () => {
  const storePares = ref([
    {
      url: new URL("@/assets/images/market/hand.png", import.meta.url),
      title: "Биорука",
      price: 7,
      count: 0,
    },
    {
      url: new URL("@/assets/images/market/microchip.png", import.meta.url),
      title: "Микрочип",
      price: 5,
      count: 0,
    },
    {
      url: new URL("@/assets/images/market/soul.png", import.meta.url),
      title: "Душа",
      price: 25,
      count: 0,
    },
  ]);
  return {
    storePares,
  };
});

export default useStock;
