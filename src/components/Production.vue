<script setup>
import { computed, ref, toRefs, watch, nextTick, onBeforeMount } from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import useStock from "@/stores/useStock";
import useCoins from "@/stores/useCoins";
import ModalWindowСongratulation from "@/components/modalWindow/ModalWindowCongratulation.vue";
import ModalWindowCongratulation from "@/components/modalWindow/ModalWindowCongratulation.vue";

const storeStockState = useStock();
const stateCoins = useCoins();
const { coins } = toRefs(stateCoins);

const { storeSpares, productionSpares } = toRefs(storeStockState);
/*modalwindowcongratulation start*/
const toggleModalWindowCongratulation = ref(false);
const closeModalWindowCongratulation = () =>
  (toggleModalWindowCongratulation.value = false);
/*modalwindowcongratulation end*/
/* init  data for details start */
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
  microchipsArray.value.reduce((acc, rec) => (rec.isActive ? acc + 1 : acc), 0),
);
// soul
const requiredSoul = ref(1); // количество деталей
const stockSouls = computed(() => storeSpares.value[2].count);
const soulsArray = ref([]); // массив, в котором храним картинки деталей рук и значение true false руки
const activeSouls = computed(() =>
  soulsArray.value.reduce((acc, rec) => (rec.isActive ? acc + 1 : acc), 0),
);

const selectedGender = ref("male"); // выбор пола робота
const selectedType = ref("frontEnd"); // выбор пола робота
const isCompleted = ref(false);

const isAvailable = computed(() => {
  // условие произвести робота
  return (
    activeMicrochips.value === requiredMicrochip.value &&
    activeHands.value === requiredHands.value &&
    activeSouls.value === requiredSoul.value
  );
});

const isEnough = computed(() => {
  return (
    stockMicrochips.value >= requiredMicrochip.value &&
    stockHands.value >= requiredHands.value &&
    stockSouls.value >= requiredSoul.value
  );
});

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

function getNamePartByAvailability() {
  if (isCompleted.value) {
    return "completed";
  }
  if (isEnough.value) {
    return "can";
  }
  return "not";
}

function getNamePartByGender() {
  if (selectedGender.value === "male") {
    return "Male";
  }
  return "Female";
}

function getNamePartByPosition() {
  if (selectedType.value === "frontEnd") {
    return "Front";
  }
  return "Design";
}

const robotImage = computed(() => {
  const firstPart = getNamePartByAvailability();
  const secondPart = getNamePartByPosition();
  const thirdPart = getNamePartByGender();
  const fileExtension = ".svg";
  const fullName = `${firstPart}${secondPart}${thirdPart}${fileExtension}`;
  return fullName;
});

watch(stockHands, (count) => {
  isCompleted.value = false;
  const disabledItemsLength = requiredHands.value - count;
  const length = handsArray.value.length;
  for (let i = 0; i < disabledItemsLength; i += 1) {
    const item = handsArray.value[length - i - 1];
    item.isActive = false;
  }
});

watch(stockMicrochips, (count) => {
  isCompleted.value = false;
  const disabledItemsLength = requiredMicrochip.value - count;
  const length = microchipsArray.value.length;
  for (let i = 0; i < disabledItemsLength; i += 1) {
    const item = microchipsArray.value[length - i - 1];
    item.isActive = false;
  }
});

watch(stockSouls, (count) => {
  isCompleted.value = false;
  const disabledItemsLength = requiredSoul.value - count;
  const length = soulsArray.value.length;
  for (let i = 0; i < disabledItemsLength; i += 1) {
    const item = soulsArray.value[length - i - 1];
    item.isActive = false;
  }
});

watch([selectedGender, selectedType], () => {
  isCompleted.value = false;
});

initHandsArray();
initMicrochipsArray();
initSoulsArray();

const creatRobot = () => {
  // создать робота и отнять деньги (сработает если все ингридиенты в наличии)
  if (isAvailable && coins.value >= 10) {
    storeSpares.value[0].count -= 4;
    storeSpares.value[1].count -= 4;
    storeSpares.value[2].count -= 1;
    coins.value -= 10;
    initHandsArray();
    initMicrochipsArray();
    initSoulsArray();
    toggleModalWindowCongratulation.value = true;
    nextTick(() => {
      isCompleted.value = true;
    });
  }
};
/* init  data for details end */

/*init data for settings start*/
function getWordFormByCount(count, { firstForm, secondForm }) {
  if (String(count).endsWith("11")) {
    return secondForm;
  }
  if (String(count).endsWith("1")) {
    return firstForm;
  }

  return secondForm;
}

const errorMessage = computed(() => {
  const requiredCoins = 10;
  const isCoinsAvailable = coins.value >= requiredCoins;
  if (isAvailable.value && isCoinsAvailable) {
    return "";
  }
  const phrases = [];
  if (activeHands.value < requiredHands.value) {
    const difference = requiredHands.value - activeHands.value;
    const word = getWordFormByCount(difference, {
      firstForm: "биоруки",
      secondForm: "биорук",
    });
    phrases.push(`${difference} ${word}`);
  }
  if (activeMicrochips.value < requiredMicrochip.value) {
    const difference = requiredMicrochip.value - activeMicrochips.value;
    const word = getWordFormByCount(difference, {
      firstForm: "микрочипа",
      secondForm: "микрочипов",
    });
    phrases.push(`${difference} ${word}`);
  }
  if (activeSouls.value < requiredSoul.value) {
    const difference = requiredSoul.value - activeSouls.value;
    const word = getWordFormByCount(difference, {
      firstForm: "души",
      secondForm: "душ",
    });
    phrases.push(`${difference} ${word}`);
  }

  if (!isCoinsAvailable) {
    phrases.push("денег");
  }
  if (
    activeHands.value === 0 &&
    activeMicrochips.value === 0 &&
    activeSouls.value === 0
  ) {
    return "Не хватает биомеханизмов, процессоров и души";
  }

  const partsPhrase = phrases.reduce((acc, rec, index, array) => {
    if (array.length === 1) {
      return rec;
    }
    const isLastItem = index === array.length - 1;
    return !isLastItem ? `${acc}, ${rec}` : `${acc} и ${rec}`;
  });
  return `Для производства биоробота не хватает ${partsPhrase}`;
});

watch(selectedType, (rrr) => {
  console.log(rrr);
});
/*init data for settings end*/

const testIn = ref("test1");
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
            <div class="settings__type-select second-text">
              <div class="settings__type-radio">
                <label for="frontEnd">
                  <input
                    type="radio"
                    value="frontEnd"
                    v-model="selectedType"
                    id="frontEnd"
                    class="settings__stabilizer-input"
                  />
                  <span class="settings__stabilizer-border-input" />
                  <span
                    class="settings__stabilizer-bg-input"
                    v-if="selectedType === 'frontEnd'"
                  />
                  <span style="margin-left: 18px">FrontEnd</span>
                </label>
              </div>
              <div class="settings__type-radio">
                <!--                <label>-->
                <!--                  <input type="radio" v-model="selectedType" value="design" />-->
                <!--                  <span>Design</span>-->
                <!--                </label>-->
                <label for="design">
                  <input
                    type="radio"
                    value="design"
                    v-model="selectedType"
                    id="design"
                    class="settings__stabilizer-input"
                  />
                  <span class="settings__stabilizer-border-input" />
                  <span
                    class="settings__stabilizer-bg-input"
                    v-if="selectedType === 'design'"
                  />
                  <span style="margin-left: 18px">Design</span>
                </label>
              </div>
            </div>
          </div>
          <!--     settings__type end     -->
          <!--     settings__stabilizer start     -->
          <div class="settings__stabilizer">
            <p class="settings__stabilizer-title medium-text">Cтабилизатор:</p>
            <div class="settings__stabilizer-gender second-text">
              <div class="settings__stabilizer-radio">
                <label for="gender-male">
                  <input
                    class="settings__stabilizer-input"
                    type="radio"
                    value="male"
                    v-model="selectedGender"
                    id="gender-male"
                  />
                  <span class="settings__stabilizer-border-input" />
                  <span
                    class="settings__stabilizer-bg-input"
                    v-if="selectedGender === 'male'"
                  />
                  <span style="margin-left: 18px">Male</span>
                </label>
              </div>
              <div class="settings__stabilizer-radio">
                <label for="gender-female">
                  <input
                    type="radio"
                    value="female"
                    v-model="selectedGender"
                    id="gender-female"
                    class="settings__stabilizer-input"
                  />
                  <span class="settings__stabilizer-border-input" />
                  <span
                    class="settings__stabilizer-bg-input"
                    v-if="selectedGender === 'female'"
                  />
                  <span style="margin-left: 18px">Female</span>
                </label>
              </div>
            </div>
          </div>
          <!--     settings__stabilizer end     -->
          <UiButton
            v-if="isAvailable && coins >= 10"
            btn-title="Произвести за 10 монет"
            class="settings__btn"
            @click="creatRobot"
            :btn-blue="true"
          />
          <UiButton
            btn-title="Произвести за 10 монет"
            class="settings__btn"
            :btn-fill-disabled="true"
            v-else
            id="produce"
          />
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
            <p class="details__info second-text">{{ errorMessage }}</p>
          </div>
        </div>
        <!--production__details end-->
      </div>
      <!--картинка робота-->
      <img :src="robotImage" alt="" class="production__img" />
    </div>
  </div>
  <ModalWindowCongratulation
    v-if="toggleModalWindowCongratulation"
    @emitCloseModalWindowCongratulation="closeModalWindowCongratulation"
  />
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";

.production {
  margin-top: 100px;

  &__h2 {
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  &__content {
    //display: flex;
    //justify-content: center;
    //align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //justify-items: start;
    //justify-content: start;
    justify-self: start;
  }

  .settings {
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
      position: relative;
      color: $color-h2;
    }

    &__type-select span {
    }

    &__type-radio {
      display: flex;
      position: relative;
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
      color: $color-h2;
    }

    &__stabilizer-radio {
      position: relative;
    }

    &__stabilizer-input {
      opacity: 0;
    }

    &__stabilizer-border-input {
      position: absolute;
      top: -2px;
      left: -5px;
      width: 24px;
      height: 24px;
      border: 2px solid #a3b8cc;
      border-radius: 100%;
      z-index: -1;
    }

    &__stabilizer-bg-input {
      position: absolute;
      top: 1px;
      left: -1.9px;
      width: 18px;
      height: 18px;
      background-color: orangered;
      border-radius: 100%;
      z-index: -1;
    }

    &__stabilizer-radio span {
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

    &__info {
      min-height: 48px;
    }
  }

  &__img {
    grid-area: img;
  }
}

.details__container {
  gap: 10px;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.soul-img {
  width: 100%;
}
</style>
