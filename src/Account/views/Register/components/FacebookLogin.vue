<template>
  <div class="description__container">
    <p class="description-paragraph">Zarejestruj się, aby przeglądać</p>
    <p class="description-paragraph">zdjęcia i filmy znajomych.</p>
    <div class="fb-login-btn__container">
      <CustomButton
        buttonTxt="Zaloguj się przez Facebooka"
        buttonIcon="../../../../Global/assets/facebookIconWhite.svg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/Global/components/CustomButton.vue";

export default defineComponent({
  components: {
    CustomButton,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.description__container {
  width: 100%;
  font-weight: bold;
  font-size: $bigger-font-size;
  color: $light-text-color;

  & .description-paragraph {
    margin: 0;
  }

  & .fb-login-btn__container {
    margin-top: 14px;
  }
}
</style>
