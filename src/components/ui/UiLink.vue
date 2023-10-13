<script setup>
import { computed } from "vue";

const props = defineProps({
  linkDisabled: {
    type: Boolean,
  },
});
const linkStyles = computed(() => ({
  link__disabled: props.linkDisabled,
}));
</script>

<template>
  <div class="link">
    <span :class="linkStyles">Нацыганить</span>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
.link {
  color: $color-gypsy;
  border-bottom: 1px solid #ff7f2280;
  cursor: pointer;
  &:hover {
    color: #ff5722;
  }
  &__disabled {
    color: #4c5865;
    pointer-events: none;
  }
}
</style>
