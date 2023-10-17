<script setup>
import { computed, ref, toRefs } from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import useStock from "@/stores/useStock";

const storeStockState = useStock();
const { storeSpares, productionSpares } = toRefs(storeStockState);
/* init  data for details hand start */
const stateCountHand = storeSpares.value[0].count;
const requiredHands = ref(4);
const stockHands = ref(stateCountHand); // Достать со стора или из пропса (склад)
const handsArray = ref([]);

const activeHands = computed(() =>
  handsArray.value.reduce((acc, rec) => (rec.isActive ? acc + 1 : acc), 0),
);

const handArray = ref([
  new URL("@/assets/images/production/details/handReady.png", import.meta.url),
  new URL(
    "@/assets/images/production/details/handInStock.png",
    import.meta.url,
  ),
  new URL(
    "@/assets/images/production/details/handNotInStock.png",
    import.meta.url,
  ),
]);
// const test = computed(() => {
//   if (storeSpares[0].count > 0 && storeSpares[0].count < 1 ) {
//     console.log(handArray.value = new URL(
//         "@/assets/images/production/details/handInStock.png",
//         import.meta.url,)
//   }
// })
/* init  data for details hand start */
</script>

<template>
  <div class="production">
    <h2 class="production__h2">Производство</h2>
    <div class="production__container">
      <div class="production__content">
        <div class="production__settings settings">
          <!--     settings__type start     -->
          <div class="settings__type">
            <p class="settings__type-title medium-text">Тип биоробота:</p>
            <div class="settings__type-select">
              <div class="settings__type-radio">
                <input type="radio" />
                <span>frontEnd</span>
              </div>
              <div class="settings__type-radio">
                <input type="radio" />
                <span>Design</span>
              </div>
            </div>
          </div>
          <!--     settings__type end     -->
          <!--     settings__stabilizer start     -->
          <div class="settings__stabilizer">
            <p class="settings__stabilizer-title medium-text">Cтабилизатор:</p>
            <div class="settings__stabilizer-gender">
              <div class="settings__stabilizer-radio">
                <input type="radio" />
                <span>male</span>
              </div>
              <div class="settings__stabilizer-radio">
                <input type="radio" />
                <span>female</span>
              </div>
            </div>
          </div>
          <!--     settings__stabilizer end     -->
          <UiButton btn-title="Произвести за 10 монет" class="settings__btn" />
        </div>
        <!--production__details start-->
        <div class="production__details details">
          <div>
            <div
              v-for="(detail, index) in productionSpares"
              :key="index"
              class="details__container"
            >
              <div
                v-for="(item, index) in detail.hand"
                :key="item.title"
                class="details__hand"
              >
                <img :src="item.url" alt="12122" class="details__img" />
              </div>
              <div
                v-for="(item, index) in detail.microchip"
                :key="item.title"
                class="details__hand"
              >
                <img :src="item.url" alt="12122" class="details__img" />
              </div>
              <div
                v-for="(item, index) in detail.soul"
                :key="item.title"
                class="details__hand"
              >
                <img
                  :src="item.url"
                  alt="12122"
                  class="soul-img details__img"
                />
              </div>
            </div>
            <p class="details__info">Nehvatka</p>
          </div>

          <!--production__details end-->
        </div>
      </div>
      <img
        src="@/assets/images/production/robot/canDesignerFemale.png"
        alt=""
        class="production__img"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";

.production {
  margin-top: 100px;
  display: flex;

  &__h2 {
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  &__content {
    //display: grid;
    //grid-template-areas: "setting details img";
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    //grid-template-columns: repeat(6, 1fr);
  }

  .settings {
    grid-area: settings;

    &__type {
      display: grid;
    }

    &__type-title {
      color: $color-h2;
      margin-bottom: 16px;
    }

    &__type-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 16px;
      gap: 27px;
    }

    &__type-select span {
      margin-left: 8px;
    }

    &__type-radio {
      display: flex;
    }

    &__stabilizer {
    }

    &__stabilizer-title {
      color: $color-h2;
      margin-bottom: 16px;
    }

    &__stabilizer-gender {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 16px;
      gap: 27px;
    }

    &__stabilizer-radio {
    }

    &__stabilizer-radio span {
      margin-left: 8px;
    }

    &__btn {
      margin-top: 77px;
    }
  }

  .details {
    align-items: center;
    justify-items: center;

    &__bg {
      width: 40px;
      height: 40px;
      background-color: #212529;
    }

    &__img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      height: auto;
      cursor: pointer;
    }

    &__hand {
      position: relative;
      width: 40px;
      height: 40px;
      background: #333940;
      display: flex;
      gap: 10px;
      margin-bottom: 2rem;

      .details__hand img {
        width: 10px;
        height: 10px;
      }
    }

    &__microchip {
      display: flex;
      gap: 10px;
    }

    &__soul {
    }
  }

  &__img {
    grid-area: img;
  }
}

.details__container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: start;
  align-items: center;
}

.soul-img {
  width: 100%;
}
</style>
