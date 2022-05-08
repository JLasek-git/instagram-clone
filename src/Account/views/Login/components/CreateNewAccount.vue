<template>
  <div class="create-new-account__container custom-container-c">
    <span class="create-new-account-text"
      >Nie masz konta?
      <span class="create-new-account-link">Zarejestruj się</span></span
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
.create-new-account__container {
  height: 65px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $regular-font-size;

  & .create-new-account-link {
    color: $accent-light-blue;
    font-weight: bold;
  }
}
</style>
