<template>
  <form
    class="register-form"
    @submit.prevent="$router.push(AppRoutesEnum.HomePage)"
  >
    <LoginInput
      placeholderText="Adres e-mail"
      v-model="newUserLoginData.email"
    />
    <LoginInput
      placeholderText="Imię i nazwisko"
      v-model="newUserLoginData.name"
    />
    <LoginInput
      placeholderText="Nazwa użytkownika"
      v-model="newUserLoginData.userName"
    />
    <LoginInput placeholderText="Hasło" v-model="newUserLoginData.password" />
    <div class="register-form-btn__container">
      <CustomButton buttonTxt="Dalej" :isActive="isButtonActive" />
    </div>
    <div class="statue-info__container">
      Rejestrując się, akceptujesz
      <span class="important">Regulamin.</span> Informacje o tym, jak zbieramy,
      wykorzystujemy i udostępniamy Twoje dane, zawierają nasze
      <span class="important">Zasady dotyczące danych.</span> O wykorzystaniu
      plików cookie i podobnych technologii informują
      <span class="important"> Zasady dotyczące plików cookie. </span>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import LoginInput from "@/Account/components/LoginInput.vue";
import CustomButton from "@/Global/components/CustomButton.vue";
import { NewUserData } from "@/Account/models/NewUserData";
import { AppRoutesEnum } from "@/App/enums/AppRoutes/appRoutesEnum";

export default defineComponent({
  components: { LoginInput, CustomButton },
  setup() {
    const isButtonActive = ref(false);
    const newUserLoginData = ref(new NewUserData());

    watch(newUserLoginData.value, () => {
      if (
        newUserLoginData.value.email === "" ||
        newUserLoginData.value.name === "" ||
        newUserLoginData.value.userName === "" ||
        newUserLoginData.value.password === ""
      ) {
        isButtonActive.value = false;
      } else {
        isButtonActive.value = true;
      }
    });

    return {
      isButtonActive,
      newUserLoginData,
      AppRoutesEnum,
    };
  },
});
</script>

<style lang="scss" scoped>
.register-form {
  width: 100%;

  & .register-form-btn__container {
    margin-top: 12px;
  }

  & .statue-info__container {
    color: $light-text-color;
    margin-top: 24px;
    font-size: $small-font-size;

    & .important {
      font-weight: bold;
    }
  }
}
</style>
