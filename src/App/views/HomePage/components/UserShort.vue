<template>
  <li class="user-short">
    <div class="photo__wrapper">
      <img :src="require(`@/App/assets/${userAvatarName}`)" />
    </div>
    <div class="user-name">{{ username }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    username: {
      type: String,
      default: () => "Username",
    },
    userAvatarName: {
      type: String,
      default: () => "userPhoto.jpg",
    },
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.user-short {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 56px;
  height: 84px;

  & .user-name {
    font-size: $small-font-size;
  }

  & .photo__wrapper {
    position: relative;
    width: 100%;
    height: 56px;
    z-index: 1;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: inherit;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: $base-border;
      background: transparent;
      left: -3px;
      top: -3px;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
