<script setup>
import { computed } from "vue";

const props = defineProps({
  link: {
    type: Boolean,
  },
  linkDisabled: {
    type: Boolean,
  },
});
const linkStyles = computed(() => ({
  link: props.link,
  link__disabled: props.linkDisabled,
}));
</script>

<template>
  <span :class="linkStyles">Нацыганить</span>
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
}
.link__disabled {
  color: #4c5865;
}
</style>
