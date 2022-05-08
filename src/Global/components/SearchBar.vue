<template>
  <div class="search-bar__container">
    <img
      class="magnify-glass search-bar-icon"
      src="../assets/magnifyGlass.svg"
    />
    <input class="search-bar" type="text" placeholder="Szukaj" />
    <img class="close-icon search-bar-icon" src="../assets/closeIcon.svg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.search-bar__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 35px;
  border-radius: $medium-border-radius;
  background-color: $accents-color;

  & .search-bar-icon {
    padding: 0 10px;
  }

  & .close-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .search-bar {
    width: 210px;
    border-radius: $medium-border-radius;
    background-color: transparent;
    border: none;
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $light-text-color;
    }

    &:-ms-input-placeholder {
      color: $light-text-color;
    }
  }
}
</style>
