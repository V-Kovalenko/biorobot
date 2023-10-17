<script setup>
import { computed, ref, watch } from "vue";

const requiredHands = ref(4);
const stockHands = ref(2); // Достать со стора или из пропса (склад)
const handsArray = ref([]);

const activeHands = computed(() => {
  return handsArray.value.reduce((acc, rec) => {
    return rec.isActive ? acc + 1 : acc;
  }, 0);
});

function getItemStyle(item) {
  return [
    "parts__item",
    {
      parts__item_active: item.isActive,
    },
  ];
}

function handleClickItem(item) {
  item.isActive = !item.isActive;
}

function initHandsArray() {
  const result = [];
  for (let i = 0; i < requiredHands.value; i += 1) {
    result.push({
      isActive: false,
      image: new URL(
        "@/assets/images/production/details/soulNotReady.png",
        import.meta.url,
      ),
      activeImage: new URL(
        "@/assets/images/production/details/soulNotReady.png",
        import.meta.url,
      ),
      disabledImage: new URL(
        "@/assets/images/production/details/soulNotReady.png",
        import.meta.url,
      ),
    });
  }
  handsArray.value = result;
}

watch(stockHands, (count) => {
  const disabledItemsLength = requiredHands.value - count;
  const length = handsArray.value.length;
  for (let i = 0; i < disabledItemsLength; i += 1) {
    const item = handsArray.value[length - i - 1];
    item.isActive = false;
  }
});

initHandsArray();
</script>

<template>
  {{ activeHands }}
</template>

<style lang="scss" scoped>
.parts {
  display: flex;
  grid-column-gap: 10px;
  margin-bottom: 15px;

  &__title {
    color: white;
  }
}

.parts__item {
  cursor: pointer;
  border: 1px solid transparent;
  color: white;
  padding: 10px 15px;
  background-color: #333940;
  &:hover {
    border-color: #ff7f22;
  }

  &:disabled {
    color: #4c5865;
    &:hover {
      border-color: transparent;
    }
  }
  &_active {
    color: #ff7f22;
    border-color: #ff7f22;
  }
}

.stocks {
  color: white;
  margin-bottom: 15px;
}
</style>
