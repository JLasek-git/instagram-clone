<template>
  <div class="login-link__container custom-container-c">
    <span class="login-text"
      >Masz konto?
      <span
        class="plain-btn-bigger"
        @click="$router.push(AccountRoutesEnum.Login)"
        >Zaloguj się</span
      ></span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AccountRoutesEnum } from "@/Account/enums/LoginRoutesEnums/AccountRoutesEnum";

export default defineComponent({
  setup() {
    return {
      AccountRoutesEnum,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-link__container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  margin-top: 10px;
  font-size: $regular-font-size;
}
</style>
