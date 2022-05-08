<template>
  <div class="header__container">
    <div
      class="instagram-logo__container"
      @click="$router.push(AccountRoutesEnum.Login)"
    >
      <img src="../../../../Global/assets/instagram-logo.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header__container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: $base-border;
  background-color: $primary-color;

  & .instagram-logo__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 975px;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
  }
}
</style>
