<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "./Global/components/MainLayout.vue";

export default defineComponent({
  components: { MainLayout },
  setup() {
    return;
  },
});
</script>

<style lang="scss"></style>
