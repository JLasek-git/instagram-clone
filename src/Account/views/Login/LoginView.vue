<template>
  <div class="login-view__container">
    <div class="left-side-img__container"></div>
    <div class="right-side-form__container">
      <div class="right-side-content__container custom-container-c">
        <div class="login-screen-logo__container">
          <img
            class="login-screen-logo"
            src="../../../Global/assets/instagram-logo-bigger.png"
          />
        </div>
        <LoginForm />
        <div class="login-utils__container">
          <span
            class="forgot-password"
            @click="$router.push(AccountRoutesEnum.ForgotPassword)"
            >Nie pamiętasz hasła?</span
          >
        </div>
      </div>
      <CreateNewAccount />
      <DownloadApp />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/Account/views/Login/components/LoginForm.vue";
import CreateNewAccount from "./components/CreateNewAccount.vue";
import { AccountRoutesEnum } from "@/Account/enums/LoginRoutesEnums/AccountRoutesEnum";
import DownloadApp from "../../components/DownloadApp.vue";
import "../../../Global/assets/photo1.png";

export default defineComponent({
  components: {
    LoginForm,
    CreateNewAccount,
    DownloadApp,
  },
  setup() {
    return {
      AccountRoutesEnum,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-view__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  & .left-side-img__container {
    width: 50%;
    height: 100%;
    background-image: url("../../../Global/assets/iphon-image.png");
    background-repeat: no-repeat;
  }

  & .right-side-form__container {
    display: flex;
    flex-direction: column;
    width: $desktop-medium-container-width;
    height: 100%;

    & .right-side-content__container {
      height: 400px;
      & .login-screen-logo__container {
        width: 100%;
        height: 90px;
        margin-top: 40px;
      }

      & .login-utils__container {
        margin: auto;
        font-size: $small-font-size;
        color: $accent-dark-blue;

        & .forgot-password {
          cursor: pointer;
        }
      }
    }
  }
}

@media only screen and (max-width: 865px) {
  .left-side-img__container {
    display: none;
  }
}
</style>
