<template>
  <main class="main-layout__container">
    <AppBar v-if="$route.meta.isNavbarVisible" />
    <section class="content__container">
      <div class="main-content__wrapper">
        <slot />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "./AppBar.vue";
export default defineComponent({
  components: { AppBar },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.main-layout__container {
  width: 100%;
  height: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .content__container {
    margin-top: 85px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    & .main-content__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $desktop-parent-container-width;
    }
  }
}
</style>
