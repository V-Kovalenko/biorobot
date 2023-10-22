<script setup>
import {computed} from "vue";

const props = defineProps({
  variant: {
    types: String,
    default: 'orange'
  },
  btnTitle: {
    type: String,
    default: ''
  }

});
const btnStyles = computed(() => {
  return [
    'btn',
    'text',
    {
      btn_blue: props.variant === 'blue',
      btn_orange: props.variant === 'orange',
      btn_fill: props.variant === 'fill',
      btn_disabled: props.disabled,
    }];
});
</script>

<template>
  <button class="btn" :class="btnStyles">
    {{btnTitle}}
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";

$orange: #FF7F22;
$orange-hover: #FF5722;
$gray: #4C5865;
.container {
}

.btn {
  min-width: 204px;
  padding: 12px 18px;
  border-radius: 60px;
  border: 2px solid transparent;

  &_orange {
    color: white;
    border-color: $orange;
    background-color: transparent;
    &:hover {
      background-color: $orange-hover;
    border-color: $orange-hover;
    }
    &:active {
      background-color: $orange;
      border-color: $orange;
    }
    &:disabled {
      background-color: transparent;
      border-color: $gray;
      color: $gray;
    }
  }
  &__blue {

    color: white;
    border-color: $orange;
    background-color: transparent;

    &:hover {
      background-color: $orange-hover;
      border-color: $orange-hover;
    }

    &:active {
      background-color: $orange;
      border-color: $orange;
    }

    &:disabled {
      background-color: transparent;
      border-color: $gray;
      color: $gray;
    }
  }

}
</style>
