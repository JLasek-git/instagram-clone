<template>
  <form class="login-form">
    <LoginInput placeholderText="Nazwa użytkownika lub adres e-mail" />
    <LoginInput placeholderText="Hasło" />
    <div class="form-btn__container">
      <CustomButton buttonTxt="Zaloguj się" :isActive="isButtonActive" />
    </div>
    <TextSeparator separatorText="LUB" />
    <FacebookLogin />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginInput from "@/Global/components/LoginInput.vue";
import CustomButton from "@/Global/components/CustomButton.vue";
import TextSeparator from "@/Global/components/TextSeparator.vue";
import FacebookLogin from "@/Account/views/Login/components/FacebookLogin.vue";

export default defineComponent({
  components: {
    LoginInput,
    CustomButton,
    TextSeparator,
    FacebookLogin,
  },
  setup() {
    const isButtonActive = ref(false);

    return {
      isButtonActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 270px;

  & .form-btn__container {
    width: 100%;
    margin-top: 12px;
  }
}
</style>
