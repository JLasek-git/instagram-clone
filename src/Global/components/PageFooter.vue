<template>
  <footer class="page-footer__container">Footer</footer>
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
.page-footer__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
}
</style>
