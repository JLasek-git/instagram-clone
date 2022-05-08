<template>
  <main class="main-layout__container">
    <NavigationBar />
    <section class="content__container">
      <div class="main-content__wrapper">
        <slot />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./NavigationBar.vue";

export default defineComponent({
  components: { NavigationBar },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.content__container {
  display: flex;
  justify-content: center;

  & .main-content__wrapper {
    width: $desktop-container-width;
    background: blue;
  }
}
</style>
