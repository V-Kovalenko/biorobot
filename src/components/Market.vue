<script setup>
import { toRefs } from "vue";
import useStock from "@/stores/useStock";
import UiButton from "@/components/ui/UiButton.vue";
import useCoins from "@/stores/useCoins";

const stock = useStock();
const coinsState = useCoins();
const { coins } = toRefs(coinsState);
const { storeSpares } = toRefs(stock);

const buyDetails = (item) => {
  // купить детали
  if (coins.value >= item.priceBuy) {
    coins.value -= item.priceBuy;
    item.count++;
  }
};
</script>

<template>
  <div class="market">
    <h2 class="market__h2">Рынок комплектующих</h2>
    <div class="market__content">
      <div class="market__cards">
        <div v-for="item in storeSpares" :key="item.title" class="market__card">
          <img :src="item.url" alt="img" class="market__card-img" />
          <p class="market__card-title info-text">{{ item.title }}</p>
          <div class="market__card-text text">
            Стоимость
            <span style="font-weight: 600">{{ item.priceBuy }}</span> монет
          </div>

          <div class="market__btn">
            <UiButton
              v-if="coins >= item.priceBuy"
              btn-title="Установить"
              :btn-fill="true"
              @click="buyDetails(item)"
            />
            <UiButton v-else btn-title="Установить" :btn-fill-disabled="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.market {
  margin-bottom: 100px;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  &__h2 {
  }
  &__cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 24px;
  }
  &__card {
    display: grid;
    grid-auto-rows: min-content;
    justify-items: center;
    align-items: center;
  }
  &__card-img {
    position: relative;
    width: 200px;
    height: 200px;
  }
  &__card-title {
    margin-bottom: 5px;
    position: relative;
    top: -25px;
  }
  &__card-text {
    margin-bottom: 24px;
    position: relative;
    top: -25px;
  }
  &__btn {
    position: relative;
    top: -25px;
  }
}
</style>
