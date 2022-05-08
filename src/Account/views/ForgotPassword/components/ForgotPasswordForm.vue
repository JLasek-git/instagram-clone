<template>
  <form class="forgot-password-form">
    <ForgotPasswordDescription />
    <LoginInput
      placeholderText="Adres e-mail lub nazwa użytkownika"
      v-model="forgotPasswordData.email"
    />
    <div class="button__container">
      <CustomButton
        buttonTxt="Wyślij link do logowania"
        :isActive="isButtonActive"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import LoginInput from "@/Account/components/LoginInput.vue";
import CustomButton from "@/Global/components/CustomButton.vue";
import { ForgotPassword } from "@/Account/models/ForgotPassword";
import ForgotPasswordDescription from "@/Account/views/ForgotPassword/components/ForgotPasswordDescription.vue";

export default defineComponent({
  components: {
    CustomButton,
    LoginInput,
    ForgotPasswordDescription,
  },
  setup() {
    const isButtonActive = ref(false);
    const forgotPasswordData = ref(new ForgotPassword());

    watch(forgotPasswordData.value, () => {
      if (forgotPasswordData.value.email === "") {
        isButtonActive.value = false;
      } else {
        isButtonActive.value = true;
      }
    });

    return {
      forgotPasswordData,
      isButtonActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.forgot-password-form {
  height: 60%;

  & .button__container {
    margin: 12px 0;
  }
}
</style>
