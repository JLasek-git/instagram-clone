<template>
  <div class="back-to-login-link__container">
    <span
      class="forgot-password-link"
      @click="$router.push(AccountRoutesEnum.Login)"
      >Powrót do logowania</span
    >
  </div>
</template>

<style lang="scss" scoped>
.back-to-login-link__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: $base-color;
  border: $base-border;
}
</style>
