<script setup>
import { computed, ref, toRefs, watch } from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import useStock from "@/stores/useStock";

const storeStockState = useStock();
const { storeSpares, productionSpares } = toRefs(storeStockState);

//hands
const requiredHands = ref(4); // количество деталей
const stockHands = computed(() => storeSpares.value[0].count);
const handsArray = ref([]); // массив, в котором храним картинки деталей рук и значение true false руки
const activeHands = computed(() =>
  handsArray.value.reduce((acc, rec) => (rec.isActive ? acc + 1 : acc), 0),
);

// microchip
const requiredMicrochip = ref(4); // количество деталей
const stockMicrochips = computed(() => storeSpares.value[1].count);
const microchipsArray = ref([]); // массив, в котором храним картинки деталей рук и значение true false руки
const activeMicrochips = computed(() =>
  handsArray.value.reduce((acc, rec) => (rec.isActive ? acc + 1 : acc), 0),
);
// soul
const requiredSoul = ref(1); // количество деталей
const stockSouls = computed(() => storeSpares.value[2].count);
const soulsArray = ref([]); // массив, в котором храним картинки деталей рук и значение true false руки
const activeSouls = computed(() =>
  handsArray.value.reduce((acc, rec) => (rec.isActive ? acc + 1 : acc), 0),
);
/* init  data for details hand end */

function handleClickItem(item) {
  // Активировать деталь
  item.isActive = !item.isActive;
}

function initHandsArray() {
  const result = [];
  for (let i = 0; i < requiredHands.value; i += 1) {
    result.push({
      isActive: false,
      image: new URL(
        "@/assets/images/production/details/handInStock.png",
        import.meta.url,
      ),
      activeImage: new URL(
        "@/assets/images/production/details/handReady.png",
        import.meta.url,
      ),
      disabledImage: new URL(
        "@/assets/images/production/details/handNotInStock.png",
        import.meta.url,
      ),
    });
  }
  handsArray.value = result;
}

function initMicrochipsArray() {
  const result = [];
  for (let i = 0; i < requiredMicrochip.value; i += 1) {
    result.push({
      isActive: false,
      image: new URL(
        "@/assets/images/production/details/microchipInStock.png",
        import.meta.url,
      ),
      activeImage: new URL(
        "@/assets/images/production/details/microchipReady.png",
        import.meta.url,
      ),
      disabledImage: new URL(
        "@/assets/images/production/details/microchipNotInStock.png",
        import.meta.url,
      ),
    });
  }
  microchipsArray.value = result;
}

function initSoulsArray() {
  const result = [];
  for (let i = 0; i < requiredSoul.value; i += 1) {
    result.push({
      isActive: false,
      image: new URL(
        "@/assets/images/production/details/soulNotReady.png",
        import.meta.url,
      ),
      activeImage: new URL(
        "@/assets/images/production/details/soulReady.png",
        import.meta.url,
      ),
      disabledImage: new URL(
        "@/assets/images/production/details/soulNotReady.png",
        import.meta.url,
      ),
    });
  }
  soulsArray.value = result;
}

watch(stockHands, (count) => {
  const disabledItemsLength = requiredHands.value - count;
  const length = handsArray.value.length;
  for (let i = 0; i < disabledItemsLength; i += 1) {
    const item = handsArray.value[length - i - 1];
    item.isActive = false;
  }
});

watch(stockMicrochips, (count) => {
  const disabledItemsLength = requiredMicrochip.value - count;
  const length = microchipsArray.value.length;
  for (let i = 0; i < disabledItemsLength; i += 1) {
    const item = microchipsArray.value[length - i - 1];
    item.isActive = false;
  }
});

watch(stockSouls, (count) => {
  const disabledItemsLength = requiredSoul.value - count;
  const length = soulsArray.value.length;
  for (let i = 0; i < disabledItemsLength; i += 1) {
    const item = soulsArray.value[length - i - 1];
    item.isActive = false;
  }
});
initHandsArray();
initMicrochipsArray();
initSoulsArray();

console.log("stockSouls", handsArray.value);
console.log("333", microchipsArray.value);
console.log("333", soulsArray.value);
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
            <div class="details__container">
              <!--hands-->
              <button
                class="details__hand"
                v-for="(detail, index) in handsArray"
                :key="index"
                :disabled="index + 1 > stockHands"
                @click="handleClickItem(detail)"
              >
                <img
                  v-if="detail.isActive"
                  :src="detail.activeImage"
                  alt="active"
                  class="details__img"
                />
                <img
                  v-else-if="index + 1 > stockHands"
                  :src="detail.disabledImage"
                  alt="disabled"
                  class="details__img"
                />
                <img
                  v-else
                  :src="detail.image"
                  alt="disabled"
                  class="details__img"
                />
              </button>
              <!--microchip-->
              <button
                class="details__hand"
                v-for="(detail, index) in microchipsArray"
                :key="index"
                :disabled="index + 1 > stockMicrochips"
                @click="handleClickItem(detail)"
              >
                <img
                  v-if="detail.isActive"
                  :src="detail.activeImage"
                  alt="active"
                  class="details__img"
                />
                <img
                  v-else-if="index + 1 > stockMicrochips"
                  :src="detail.disabledImage"
                  alt="disabled"
                  class="details__img"
                />
                <img
                  v-else
                  :src="detail.image"
                  alt="disabled"
                  class="details__img"
                />
              </button>
              <!--soul-->
              <button
                class="details__hand"
                v-for="(detail, index) in soulsArray"
                :key="index"
                :disabled="index + 1 > stockSouls"
                @click="handleClickItem(detail)"
              >
                <img
                  v-if="detail.isActive"
                  :src="detail.activeImage"
                  alt="active"
                  class="details__img"
                />
                <img
                  v-else-if="index + 1 > stockSouls"
                  :src="detail.disabledImage"
                  alt="disabled"
                  class="details__img"
                />
                <img
                  v-else
                  :src="detail.image"
                  alt="disabled"
                  class="details__img"
                />
              </button>
            </div>
            <p class="details__info">Nehvatka</p>
          </div>
        </div>
        <!--production__details end-->
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
    //gap: 30px;
    //grid-template-columns: repeat(6, 1fr);
  }

  .settings {
    grid-area: settings;
    margin-right: 30px;

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
    display: flex;
    justify-content: center;
    align-items: center;

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
  //display: flex;
  //flex-wrap: wrap;
  gap: 10px;
  justify-content: start;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.soul-img {
  width: 100%;
}
</style>
