<template>
  <Transition name="slide-fade">
    <div class="dialog__container" v-if="modelValue">
      <div class="dialog-items__wrapper">
        <div class="recent-searches"></div>
        <div
          class="arrow"
          :style="rightSideArrow ? 'left: 80% !important;' : ''"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, Transition } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    rightSideArrow: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Transition,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.dialog__container {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: -369px;
  width: 375px;
  height: 360px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  border-radius: 6px;

  & .dialog-items__wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    & .recent-searches {
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      z-index: 2;
    }

    & .arrow {
      position: absolute;
      width: 12px;
      height: 12px;
      background: $primary-color;
      border: 1px solid $primary-color;
      -webkit-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.0975);
      -webkit-transform: rotate(45deg) translateX(-50%);
      transform: rotate(45deg) translateX(-50%);
      top: 0px;
      left: 50%;
      z-index: 1;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.1s;
}

.slide-fade-leave-active {
  transition: all 0.1s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
