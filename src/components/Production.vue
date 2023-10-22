<script setup>
import {computed, ref, toRefs, watch, nextTick, onBeforeMount} from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import useStock from "@/stores/useStock";
import useCoins from "@/stores/useCoins";

import ModalWindowCongratulation from "@/components/modalWindow/ModalWindowCongratulation.vue";

const storeStockState = useStock();
const stateCoins = useCoins();
const {coins} = toRefs(stateCoins);

const {storeSpares, productionSpares} = toRefs(storeStockState);
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
function getWordFormByCount(count, {firstForm, secondForm}) {
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
          <div class="settings__section">
            <p class="settings__title medium-text">Тип биоробота:</p>
            <div class="settings__panel second-text">
              <label class="settings__radio" for="frontEnd">
                <input
                    type="radio"
                    value="frontEnd"
                    v-model="selectedType"
                    id="frontEnd"
                    class="settings__input"
                    hidden
                />
                <div class="settings__check">
                                 <span
                                     class="settings__circle"
                                     v-if="selectedType === 'frontEnd'"
                                 />
                </div>
                <span>FrontEnd</span>
              </label>
              <label class="settings__radio" for="design">
                <input
                    type="radio"
                    value="design"
                    v-model="selectedType"
                    id="design"
                    class="settings__input"
                    hidden
                />
                <div class="settings__check">
                                 <span
                                     class="settings__circle"
                                     v-if="selectedType === 'design'"
                                 />
                </div>
                <span>Design</span>
              </label>
            </div>
          </div>

          <div class="settings__section">
            <p class="settings__title medium-text">Cтабиилзатор:</p>
            <div class="settings__panel second-text">
              <label class="settings__radio" for="gender-male">
                <input
                    type="radio"
                    value="male"
                    v-model="selectedGender"
                    id="gender-male"
                    class="settings__input"
                    hidden
                />
                <div class="settings__check">
                                 <span
                                     class="settings__circle"
                                     v-if="selectedGender === 'male'"
                                 />
                </div>
                <span>Male</span>
              </label>
              <label class="settings__radio" for="gender-female">
                <input
                    type="radio"
                    value="female"
                    v-model="selectedGender"
                    id="gender-female"
                    class="settings__input"
                    hidden
                />
                <div class="settings__check">
                                 <span
                                     class="settings__circle"
                                     v-if="selectedGender === 'female'"
                                 />
                </div>
                <span>Female</span>
              </label>
            </div>
          </div>


        </div>
        <!--production__details start-->
        <div class="production__details details">
          <div class="details__container">
            <!--hands-->
            <div class="details__row">
              <button
                  class="details__button"
                  :class="{'details__button_active': detail.isActive}"
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
            </div>
            <!--mi`crochip-->
            <div class="details__row">

              <button
                  class="details__button"
                  :class="{'details__button_active': detail.isActive}"
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
            </div>

            <!--soul-->
            <div class="details__row">

              <button
                  class="details__button"
                  :class="{'details__button_active': detail.isActive}"
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

          </div>

        </div>
        <UiButton
            v-if="isAvailable && coins >= 10"
            btn-title="Произвести за 10 монет"
            class="production__produce"
            @click="creatRobot"
            :btn-blue="true"
        />
        <UiButton
            v-else
            btn-title="Произвести за 10 монет"
            class="production__produce"
            :btn-fill-disabled="true"
            id="produce"
        />
        <p class="production__info second-text">{{ errorMessage }}</p>
      </div>

      <!--картинка робота-->
      <img :src="robotImage" alt="" class="production__img"/>
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
  display: flex;
  flex-direction: column;
  grid-row-gap: 60px;
  width: 100%;
  @media screen and (max-width: 767px) {
    grid-row-gap: 40px;
  }

  &__h2 {
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }

  &__container {
    display: grid;
    grid-column-gap: 28px;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 236px auto;
    }
    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 28px;
    grid-row-gap: 20px;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .settings {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;

    &__title {
      color: $color-h2;
      margin-bottom: 16px;
    }

    &__panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 16px;
      gap: 27px;
      position: relative;
      color: $color-h2;

    }


    &__radio {
      display: flex;
      align-items: center;
      grid-column-gap: 12px;

    }

    &__check {
      width: 24px;
      height: 24px;
      border: 2px solid #a3b8cc;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__circle {
      width: 18px;
      height: 18px;
      background-color: #FF7F22;
      border-radius: 100%;
    }


  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      grid-row-gap: 16px;
    }

    &__row {
      display: flex;
      grid-column-gap: 10px;
    }


    &__img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    &__button {
      border: 2px solid transparent;
      border-radius: 4px;
      cursor: pointer;
      width: 48px;
      height: 48px;
      background: #333940;
      display: flex;
      align-items: center;
      justify-content: center;

      &_active {
        border-color: #FF7F22;
      }
    }


  }

  &__produce {
    @media screen and (max-width: 1023px) {
      order: 4;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  &__img {
    width: 236px;
    height: 320px;
    object-fit: contain;
  }

  &__info {
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
