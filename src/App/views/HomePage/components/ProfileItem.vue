<template>
  <div class="profile-item__container">
    <div
      class="user-avatar"
      :style="
        biggerAvatar ? '' : 'width: 32px !important; height: 32px !important;'
      "
    ></div>
    <div class="user-info">
      <div class="plain-btn-gray">{{ userData.username }}</div>
      <span v-if="isRealNameVisible" class="user-real-name">{{
        userData.realName
      }}</span>
    </div>
    <div class="plain-btn">{{ plainBtnText }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UtilsUserModel } from "@/App/models/UtilsUserModel";

export default defineComponent({
  props: {
    userData: {
      type: Object as PropType<UtilsUserModel>,
      required: true,
    },
    plainBtnText: {
      type: String,
      default: () => "Obserwuj",
    },
    biggerAvatar: {
      type: Boolean,
      default: false,
    },
    isRealNameVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.profile-item__container {
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: $small-font-size;

  & .user-avatar {
    width: 55px;
    height: 55px;
    background: lightcyan;
    border: $base-border;
    border-radius: 50%;
    margin-right: $small-margin;
    flex: 0 0 auto;
  }

  & .user-info {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    text-align: left;
  }
}
</style>
