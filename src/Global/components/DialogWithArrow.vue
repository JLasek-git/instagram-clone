<template>
  <div class="recent-searches__container">
    <div class="components__container">
      <div class="recent-searches"></div>
      <div
        class="arrow"
        :style="rightSideArrow ? 'left: 80% !important;' : ''"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    rightSideArrow: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.recent-searches__container {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: -369px;
  width: 375px;
  height: 360px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  border-radius: 6px;

  & .components__container {
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
  }
}
</style>
