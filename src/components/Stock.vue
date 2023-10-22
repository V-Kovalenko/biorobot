<script setup>
import { toRefs } from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import useCoins from "@/stores/useCoins";
import useStock from "@/stores/useStock";
import UiLink from "@/components/ui/UiLink.vue";

const coinsState = useCoins();
const stock = useStock();
const { coins } = toRefs(coinsState);
const { storeSpares } = toRefs(stock);
const emit = defineEmits(["emitShowErrorStock"]);
const sendEmitShowError = () => {
  emit("emitShowErrorStock");
};
const sellDetails = (item) => {
  const sum = coins.value + item.priceSell <= 100;
  if (item.count > 0 && sum) {
    item.count--;
    coins.value += item.priceSell;
  } else {
    sendEmitShowError();
  }
};
</script>

<template>
  <div class="stock">
    <div class="stock__content">
      <h2 class="stock__h2">Склад</h2>
      <div class="stock__cards">
        <div
          v-for="item in storeSpares"
          :key="item.title"
          class="stock__card"
          :class="{ stock__card_lg: item.title === 'Душа' }"
        >
          <p class="stock__card-title info-text">{{ item.title }}</p>
          <div class="stock__card-text text">
            Стоимость:
            <span style="font-weight: 600">{{ item.priceSell }}</span> монет
          </div>
          <div class="stock__count info-text">{{ item.count }} шт</div>

          <div class="stock__btn">
            <UiButton
              v-if="item.count"
              btn-title="Продать"
              variant="blue"
              @click="sellDetails(item)"
            />
            <UiButton
                variant="blue"
              v-else
              btn-title="Продать"
              :disabled="true"
              @click="sendEmitShowError"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {{ coins.value }}
</template>

<style scoped lang="scss">
@import "@/assets/scss/mixin";
.stock {
  &__content {
    display: grid;
    grid-template-rows: auto;
  }

  &__h2 {
    margin-bottom: 60px;
    @media screen and (max-width: 1919px) {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }

  &__cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 24px;
    grid-row-gap: 50px;
  }

  &__card {
    display: grid;
    grid-auto-rows: min-content;
    justify-items: center;
    align-items: center;
  }
  &__card_lg {
    grid-column: span 2;
    @media screen and (max-width: 767px) {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-column: span 1;
    }
  }

  &__card-title {
    margin-bottom: 5px;
  }

  &__card-text {
    margin-bottom: 15px;
  }

  &__count {
    margin-bottom: 24px;
  }

  &__btn {
  }
}
</style>
