<template>
  <nav class="navigation-drawer__container">
    <div class="navigation-items__container">
      <div class="logo__container">
        <img src="../assets/instagram-logo.png" />
      </div>
      <div class="search-bar__container">
        <SearchBar />
      </div>
      <div class="icons-nav__container">dsaddsadsa</div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/Global/components/SearchBar.vue";

export default defineComponent({
  components: {
    SearchBar,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.navigation-drawer__container {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: $base-border;

  .navigation-items__container {
    width: $desktop-container-width;
    display: flex;
    align-items: center;
    height: 100%;

    & .logo__container {
      display: flex;
      justify-content: flex-start;
      flex: 1 0 130px;
    }

    & .search-bar__container {
      display: flex;
      flex: 0 1 auto;
    }

    & .icons-nav__container {
      display: flex;
      justify-content: flex-end;
      flex: 1 0 130px;
    }
  }
}
</style>
