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
$blue-color: #7CDAF9;

.container {
}

.btn {
  min-width: 204px;
  padding: 12px 18px;
  border-radius: 60px;
  border: 2px solid transparent;
  font-weight: 600;

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

  &_blue {
    color: $blue-color;
    background-color: transparent;
    border-color: $blue-color;


    &:hover {
      background-color: rgba(124, 218, 249, 1);
      color: rgba(33, 37, 41, 1);
    }

    &:active {
      background-color: transparent;
      border-color: $blue-color;
      color: $blue-color;
    }

    &:disabled {
      background-color: transparent;
      border-color: $gray;
      color: $gray;
    }
  }

  &_fill {
    color: white;
    background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);


    &:hover {
      background: $orange-hover;
      color: white;
    }

    &:active {
      background: $orange;
    }

    &:disabled {
      background-color: transparent;
      border-color: $gray;
      color: $gray;
    }
  }

}
</style>
