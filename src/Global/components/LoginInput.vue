<template>
  <div class="custom-input__container">
    <input class="custom-input" type="text" />
  </div>
</template>

<style lang="scss" scoped>
.custom-input__container {
  background-color: $base-color;
  border: $base-border;
  width: 100%;
  height: 35px;
  margin-top: 7px;

  & .custom-input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    margin: 0 5px;

    &:focus {
      outline: none;
    }
  }
}
</style>
