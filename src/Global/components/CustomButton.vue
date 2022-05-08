<template>
  <button
    class="custom-button"
    :style="isActive ? '' : 'background-color: rgba(0,149,246,.3) !important;'"
  >
    {{ buttonTxt }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buttonTxt: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.custom-button {
  width: 100%;
  height: 30px;
  border-radius: $small-border-radius;
  border: none;
  background-color: $accent-light-blue;
  color: $primary-color;
  font-weight: bold;
}
</style>
