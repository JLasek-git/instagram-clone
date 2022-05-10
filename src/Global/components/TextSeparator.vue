<template>
  <div class="separator__container">
    <div class="separator-line"></div>
    <span class="separator-text">{{ separatorText }}</span>
    <div class="separator-line"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    separatorText: String,
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.separator__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: $default-margin 0;
  & .separator-line {
    width: 100%;
    height: 1px;
    background-color: $light-text-color;
  }
  & .separator-text {
    color: $light-text-color;
    font-weight: bold;
    font-size: $medium-font-size;
    margin: 0 $default-margin;
  }
}
</style>
