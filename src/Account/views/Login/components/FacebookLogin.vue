<template>
  <div class="facebook-login__container">
    <img
      class="facebook-icon"
      src="../../../../Global/assets/facebookIcon.svg"
    />
    <span class="facebook-login-text">Zaloguj się przez Facebooka</span>
  </div>
</template>

<style lang="scss" scoped>
.facebook-login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  & .facebook-login-text {
    font-size: $regular-font-size;
    color: $accent-gray-blue;
    font-weight: bold;
  }
  & .facebook-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
</style>
