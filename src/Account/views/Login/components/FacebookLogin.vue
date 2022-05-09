<template>
  <div
    class="facebook-login__container"
    @click="$router.push(AppRoutesEnum.HomePage)"
  >
    <img
      class="facebook-icon"
      src="../../../../Global/assets/facebookIcon.svg"
    />
    <span class="facebook-login-text">Zaloguj się przez Facebooka</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppRoutesEnum } from "@/App/enums/AppRoutes/appRoutesEnum";

export default defineComponent({
  setup() {
    return {
      AppRoutesEnum,
    };
  },
});
</script>

<style lang="scss" scoped>
.facebook-login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & .facebook-login-text {
    font-size: $regular-font-size;
    color: $accent-gray-blue;
    font-weight: bold;
  }
  & .facebook-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
</style>
