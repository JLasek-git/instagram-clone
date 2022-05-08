<template>
  <form class="login-form">
    <LoginInput
      placeholderText="Nazwa użytkownika lub adres e-mail"
      v-model="userLoginData.login"
    />
    <LoginInput placeholderText="Hasło" v-model="userLoginData.password" />
    <div class="form-btn__container">
      <CustomButton buttonTxt="Zaloguj się" :isActive="isButtonActive" />
    </div>
    <TextSeparator separatorText="LUB" />
    <FacebookLogin />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import LoginInput from "@/Global/components/LoginInput.vue";
import CustomButton from "@/Global/components/CustomButton.vue";
import TextSeparator from "@/Global/components/TextSeparator.vue";
import FacebookLogin from "@/Account/views/Login/components/FacebookLogin.vue";
import { UserLogin } from "@/Account/models/UserLogin";

export default defineComponent({
  components: {
    LoginInput,
    CustomButton,
    TextSeparator,
    FacebookLogin,
  },
  setup() {
    const isButtonActive = ref(false);
    const userLoginData = ref(new UserLogin());

    watch(userLoginData.value, () => {
      if (
        userLoginData.value.login === "" ||
        userLoginData.value.password === ""
      ) {
        isButtonActive.value = false;
      } else {
        isButtonActive.value = true;
      }
    });

    return {
      userLoginData,
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
