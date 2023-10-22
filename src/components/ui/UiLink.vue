<script setup>
import { computed } from "vue";

const props = defineProps({
  disabled: {
    type: Boolean,
  },
});
const linkStyles = computed(() => ({
  link__disabled: props.disabled,
}));
</script>

<template>
  <span class="link" :class="linkStyles"><slot /></span>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
.link {
  color: $color-gypsy;
  border-bottom: 1px solid #ff7f2280;
  cursor: pointer;
  width: max-content;
  &:hover {
    color: #ff5722;
  }
  &__disabled {
    color: #4c5865;
    border-bottom: 1px solid transparent;
    &:hover {
      color: #4c5865;
    }
  }
}
</style>
