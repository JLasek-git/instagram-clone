<template>
  <div class="custom-input__container">
    <input
      class="custom-input"
      type="text"
      :placeholder="placeholderText"
      v-model="userInputValue"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
    },
    placeholderText: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const userInputValue = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        emit("update:modelValue", value);
      },
    });

    return {
      userInputValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-input__container {
  background-color: $base-color;
  border: $base-border;
  width: 100%;
  height: 35px;
  margin-top: 7px;

  & .custom-input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    margin: 0 5px;

    &:focus {
      outline: none;
    }
  }
}
</style>
