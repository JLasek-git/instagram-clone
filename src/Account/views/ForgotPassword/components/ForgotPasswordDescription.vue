<template>
  <div class="forgot-password-description__container">
    <div class="forgot-password-icon"></div>
    <h3 class="forgot-password-description-header">Problem z logowaniem?</h3>
    <p>
      Wprowadź swój adres e-mail, numer telefonu lub nazwę użytkownika, a my
      wyślemy ci link, który umożliwi odzyskanie dostępu do konta.
    </p>
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
.forgot-password-description__container {
  text-align: center;
  font-size: $regular-font-size;
  color: $light-text-color;

  & .forgot-password-icon {
    height: 96px;
    margin: 24px 0;
  }

  & .forgot-password-description-header {
    color: black;
  }
}
</style>
