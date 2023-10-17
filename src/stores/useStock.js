import { defineStore } from "pinia";
import { reactive, ref } from "vue";

const useStock = defineStore("useStock", () => {
  const storeSpares = ref([
    {
      url: new URL("@/assets/images/market/hand.png", import.meta.url),
      title: "Биорука",
      priceBuy: 7,
      count: 0,
      priceSell: 5,
    },
    {
      url: new URL("@/assets/images/market/microchip.png", import.meta.url),
      title: "Микрочип",
      priceBuy: 5,
      count: 0,
      priceSell: 3,
    },
    {
      url: new URL("@/assets/images/market/soul.png", import.meta.url),
      title: "Душа",
      priceBuy: 25,
      count: 0,
      priceSell: 15,
    },
  ]);
  // {url: new URL('"@/assets/images/details/')},
  const productionSpares = ref([
    {
      hand: [
        {
          title: "handReady",
          url: new URL(
            "@/assets/images/production/details/handReady.png",
            import.meta.url,
          ),
        },
        {
          title: "handInStock",
          url: new URL(
            "@/assets/images/production/details/handInStock.png",
            import.meta.url,
          ),
        },
        {
          title: "handNotInStock",
          url: new URL(
            "@/assets/images/production/details/handNotInStock.png",
            import.meta.url,
          ),
        },
        {
          title: "handNotInStock",
          url: new URL(
            "@/assets/images/production/details/handNotInStock.png",
            import.meta.url,
          ),
        },
      ],
    },
    {
      microchip: [
        {
          title: "microchipReady",
          url: new URL(
            "@/assets/images/production/details/microchipReady.png",
            import.meta.url,
          ),
        },
        {
          title: "microchipInStock",
          url: new URL(
            "@/assets/images/production/details/microchipInStock.png",
            import.meta.url,
          ),
        },
        {
          title: "microchipNotInStock",
          url: new URL(
            "@/assets/images/production/details/microchipNotInStock.png",
            import.meta.url,
          ),
        },
        {
          title: "microchipNotInStock",
          url: new URL(
            "@/assets/images/production/details/microchipNotInStock.png",
            import.meta.url,
          ),
        },
      ],
    },
    {
      soul: [
        {
          title: "soulReady",
          url: new URL(
            "@/assets/images/production/details/soulReady.png",
            import.meta.url,
          ),
        },
        {
          title: "soulNotReady",
          url: new URL(
            "@/assets/images/production/details/soulNotReady.png",
            import.meta.url,
          ),
        },
      ],
    },
  ]);
  return {
    storeSpares,
    productionSpares,
  };
});
export default useStock;
