<template>
  <div class="login-link__container custom-container-c">
    <span class="login-text"
      >Masz konto? <span class="link">Zaloguj się</span></span
    >
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
.login-link__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-top: 10px;
  font-size: $regular-font-size;
}
</style>
