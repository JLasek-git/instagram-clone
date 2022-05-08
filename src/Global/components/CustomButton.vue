<template>
  <button
    @click="emit('buttonClicked')"
    class="custom-button"
    :disabled="!isActive"
    :style="
      isActive
        ? 'cursor: pointer;'
        : 'background-color: rgba(0,149,246,.3) !important; '
    "
  >
    {{ buttonTxt }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["buttonClicked"],
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
  display: flex;
  justify-content: center;
  align-items: center;

  & .icon {
    height: 18px;
    width: 18px;
    margin-right: 5px;
  }
}
</style>
