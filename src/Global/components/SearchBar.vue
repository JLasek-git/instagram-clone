<template>
  <div class="search-bar__container">
    <img
      v-if="isSearchIconVisible"
      class="magnify-glass search-bar-icon"
      src="../assets/magnifyGlass.svg"
    />
    <input
      v-model="searchBarText"
      ref="searchBar"
      class="search-bar"
      type="text"
      placeholder="Szukaj"
      @focus="changeIconsVisibility()"
    />
    <img
      v-if="!isSearchIconVisible"
      @click="clearUserInput()"
      class="close-icon search-bar-icon"
      src="../assets/closeIcon.svg"
    />
    <DialogWithArrow v-model="isRecentSearchesVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DialogWithArrow from "@/Global/components/DialogWithArrow.vue";

export default defineComponent({
  components: {
    DialogWithArrow,
  },
  setup() {
    const searchBarText = ref("");
    const isCloseIconVisible = ref(false);
    const isSearchIconVisible = ref(true);
    const isRecentSearchesVisible = ref(false);

    function changeIconsVisibility(): void {
      isCloseIconVisible.value = !isCloseIconVisible.value;
      isSearchIconVisible.value = !isSearchIconVisible.value;
      isRecentSearchesVisible.value = !isRecentSearchesVisible.value;
    }

    function clearUserInput(): void {
      searchBarText.value = "";
      changeIconsVisibility();
      console.log("czyszczę");
    }

    return {
      searchBarText,
      isCloseIconVisible,
      isSearchIconVisible,
      isRecentSearchesVisible,
      changeIconsVisibility,
      clearUserInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-bar__container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: $desktop-small-container-width;
  height: 35px;
  border-radius: $medium-border-radius;
  background-color: $accents-color;
  z-index: 10 !important;
  & .search-bar-icon {
    padding: 0 10px;
  }

  & .close-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  & .search-bar {
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
