<script setup>
import {computed} from "vue";

const props = defineProps({
  btnTitle: {
    type: String,
    required: true,
    default: 'button'
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
    type: Boolean
  },
  btnOrange:{
    type: Boolean,
  }
})
const btnStyles = computed(() => {
  return {
    'btn__blue': props.btnBlue,
    'btn__blue-disabled': props.btnBlueDisabled,
    'btn__fill': props.btnFill,
    'btn__fill-disabled': props.btnFillDisabled,
    'btn__orange-normal': props.btnOrange
  }
})

</script>

<template>
    <button class="btn" :class="btnStyles">
      <span class="text">
        <span class="btn__bg">
      {{ props.btnTitle }}
        </span>
       </span>
    </button>

</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";

.container {

}

.btn {
  width: 204px;
  height: 48px;
  border: 2px solid transparent;
  //padding: 12px 60px 12px 60px;
  border-radius: 60px;
  text-align: center;

  /*btn blue start*/
  // btn blue normal start
  &__blue {
    color: $btn-blue-text-color-normal;
    border-radius: 60px;
    border: 2px solid;
    background: linear-gradient(90deg, #22B3E3 0%, #7CDAF9 52.6%, #22B3E3 100%);
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    &:hover {
      color: black;
      background: #7CDAF9;
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
    width: 200px;
    height: 44px;
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
    color: #FFFFFF;

    .btn__bg {
      background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);

      &:hover {
        color: #FFFFFF;
        background: #FF5722;
      }
    }
  }
  &__fill-disabled{
    color: #7D90A6;
    background: #4C5865;
    .btn__bg {
      background: #4C5865;
      &:hover {
        color: #7D90A6;
      }
    }
  }

  /*btn fill end*/

  /*btn orange start*/
  &__orange-normal {
    background: #FF7F22;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 24px;
      .btn__bg:hover {
        background: #FF5722;
        color: #FFFFFF;

    }
  }
  /*btn orange end*/
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>