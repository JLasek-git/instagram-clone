<template>
  <div class="forgot-password__container custom-container-c">
    <ForgotPasswordHeader />
    <div class="forgot-password-content__container">
      <ForgotPasswordForm />
      <TextSeparator separatorText="LUB" />
      <span
        class="forgot-password-link"
        @click="$router.push(AccountRoutesEnum.Register)"
        >Utwórz nowe konto</span
      >
    </div>
    <BackToLogin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextSeparator from "@/Global/components/TextSeparator.vue";
import { AccountRoutesEnum } from "@/Account/enums/LoginRoutesEnums/AccountRoutesEnum";
import ForgotPasswordHeader from "@/Account/views/ForgotPassword/components/ForgotPasswordHeader.vue";
import BackToLogin from "@/Account/views/ForgotPassword/components/BackToLogin.vue";
import ForgotPasswordForm from "@/Account/views/ForgotPassword/components/ForgotPasswordForm.vue";

export default defineComponent({
  components: {
    TextSeparator,
    ForgotPasswordHeader,
    BackToLogin,
    ForgotPasswordForm,
  },
  setup() {
    return {
      AccountRoutesEnum,
    };
  },
});
</script>

<style lang="scss" scoped>
.forgot-password__container {
  width: 390px;
  height: 520px;
  margin: 160px 0;

  & .forgot-password-link {
    font-size: $regular-font-size;
    font-weight: bold;
    cursor: pointer;
  }

  & .forgot-password-content__container {
    height: 100%;
    width: 300px;
  }
}
</style>
