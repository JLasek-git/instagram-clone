<template>
  <form
    class="login-form"
    @submit.prevent="$router.push(AppRoutesEnum.HomePage)"
  >
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
import LoginInput from "@/Account/components/LoginInput.vue";
import CustomButton from "@/Global/components/CustomButton.vue";
import TextSeparator from "@/Global/components/TextSeparator.vue";
import FacebookLogin from "@/Account/views/Login/components/FacebookLogin.vue";
import { AppRoutesEnum } from "@/App/enums/AppRoutes/appRoutesEnum";
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
      AppRoutesEnum,
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
  width: $desktop-small-container-width;

  & .form-btn__container {
    width: 100%;
    margin-top: $small-margin;
  }
}
</style>
