<script setup>
import { computed } from "vue";

const props = defineProps({
  btnTitle: {
    type: String,
    required: true,
    default: "button",
  },
  btnBlue: {
    type: Boolean,
  },
  btnBlueDisabled: {
    type: Boolean,
  },
  btnFill: {
    type: Boolean,
  },
  btnFillDisabled: {
    type: Boolean,
  },
  btnOrange: {
    type: Boolean,
  },
});
const btnStyles = computed(() => {
  return {
    btn__blue: props.btnBlue,
    "btn__blue-disabled": props.btnBlueDisabled,
    btn__fill: props.btnFill,
    "btn__fill-disabled": props.btnFillDisabled,
    "btn__orange-normal": props.btnOrange,
  };
});
</script>

<template>
  <button class="btn" :class="btnStyles">
    <span class="text">
      <span class="btn__bg">
        <span class="btn__text-color">
          {{ props.btnTitle }}
        </span>
      </span>
    </span>
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";

.container {
}

.btn {
  width: 222px;
  height: 46px;
  border: 2px solid transparent;
  border-radius: 60px;
  text-align: center;

  /*btn blue start*/
  // btn blue normal start
  &__blue {
    color: $btn-blue-text-color-normal;
    border-radius: 60px;
    border: 2px solid;
    background: linear-gradient(90deg, #22b3e3 0%, #7cdaf9 52.6%, #22b3e3 100%);
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    &:hover {
      color: black;
      background: #7cdaf9;
      border: none;
    }
  }

  &__bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $bg-color;
    border-radius: 60px;
    position: absolute;
    width: 218px;
    height: 42px;
    text-align: center;

    &:hover {
      color: $btn-blue-color-hover;
      background: $btn-blue-bg-hover;
    }
  }

  &__blue-disabled {
    color: $btn-blue-color-disabled;
    border: 2px solid;
    background: $bg-color;

    .btn__bg:hover {
      color: $btn-blue-color-disabled;
      background: $bg-color;
    }
  }

  // btn blue normal end

  /*btn blue end*/

  /*btn fill start*/
  &__fill {
    color: #ffffff;

    .btn__bg {
      background: linear-gradient(180deg, #ff7f22 0%, #ff5722 100%);

      &:hover {
        color: #ffffff;
        background: #ff5722;
      }
    }
  }

  &__fill-disabled {
    color: #7d90a6;
    background: #4c5865;

    .btn__bg {
      background: #4c5865;

      &:hover {
        color: #7d90a6;
      }
    }
  }

  /*btn fill end*/

  /*btn orange start*/
  &__orange-normal {
    background: #ff7f22;
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;

    .btn__bg:hover {
      background: #ff5722;
      color: #ffffff;
    }
  }
  &__text-color {
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  /*btn orange end*/
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
