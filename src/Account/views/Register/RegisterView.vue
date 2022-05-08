<template>
  <div class="register-view__container">
    <div class="register-content__container custom-container-c">
      <div class="register-content">
        <div class="image-logo__container">
          <img src="../../../Global/assets/instagram-logo-bigger.png" />
        </div>
        <FacebookLogin />
        <TextSeparator separatorText="LUB" />
        <RegisterForm />
      </div>
    </div>
    <HaveAccount />
    <DownloadApp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DownloadApp from "@/Account/components/DownloadApp.vue";
import FacebookLogin from "@/Account/views/Register/components/FacebookLogin.vue";
import TextSeparator from "@/Global/components/TextSeparator.vue";
import RegisterForm from "@/Account/views/Register/components/RegisterForm.vue";
import HaveAccount from "@/Account/views/Register/components/HaveAccount.vue";

export default defineComponent({
  components: {
    DownloadApp,
    FacebookLogin,
    TextSeparator,
    RegisterForm,
    HaveAccount,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.register-view__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 100%;

  & .image-logo__container {
    height: 80px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  & .register-content__container {
    width: 100%;
    height: 620px;

    & .register-content {
      width: 270px;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
