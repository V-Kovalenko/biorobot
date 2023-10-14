<script setup>
import { toRefs } from "vue";
import useStock from "@/stores/useStock";
import UiButton from "@/components/ui/UiButton.vue";
import useCoins from "@/stores/useCoins";

const stock = useStock();
const coinsState = useCoins();
const { coins } = toRefs(coinsState);
const { storePares } = toRefs(stock);

const buyDetails = (item) => {
  // продать детали
  if (coins.value >= item.price) {
    coins.value -= item.price;
    item.count++;
    console.log(item.count);
  }
};
</script>

<template>
  <div class="market">
    <div class="market__content">
      <h2 class="market__h2">Рынок комплектующих</h2>
      <div class="market__cards">
        <div v-for="item in storePares" :key="item.title" class="market__card">
          <img :src="item.url" alt="img" class="market__card-img" />
          <p class="market__card-title info-text">{{ item.title }}</p>
          <div class="market__card-text text">
            Стоимость
            <span>{{ item.price }}</span> монет
          </div>

          <div class="market__btn">
            <UiButton
              v-if="coins >= item.price"
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
  &__content {
    display: flex;
    flex-wrap: wrap;
  }
  &__h2 {
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
  }
  &__card {
    display: grid;
    grid-auto-rows: min-content;
    justify-items: center;
    align-items: center;
  }
  &__card-img {
    position: relative;
    width: 260px;
    height: 260px;
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
