<template>
  <div class="custom-container-c photo__container">
    <div class="photo-header">
      <div class="user-info">
        <div class="user-avatar"></div>
        <div class="user-name">_music_theory</div>
      </div>
      <div class="utils">
        <img src="../../../../Global/assets/dots.svg" />
      </div>
    </div>
    <div class="photo__container"></div>
    <div class="comments-section">
      <div class="comments-section-icons">
        <div class="reaction-icons">
          <img
            class="photo-icon"
            src="../../../../Global/assets/heart-outline.svg"
          />
          <img class="photo-icon" src="../../../../Global/assets/chat.svg" />
          <img
            class="photo-icon"
            src="../../../../Global/assets/paperplane.svg"
          />
        </div>
        <div class="save-icon">
          <img class="photo-icon" src="../../../../Global/assets/compass.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.photo__container {
  height: fit-content;
  width: calc(615px - 20px);
  border-radius: $small-border-radius;
  padding: 0 10px;
  margin-top: 25px;

  & .photo-header {
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;

    & .user-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: 90%;

      & .user-avatar {
        width: 30px;
        height: 30px;
        background: gray;
        border-radius: 50%;
      }

      & .user-name {
        margin-left: 15px;
        font-size: $regular-font-size;
        font-weight: bold;
      }
    }

    & .utils {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10%;
      height: 100%;
    }
  }

  & .photo__container {
    height: 615px;
    width: 100%;
  }

  & .comments-section {
    height: 230px;
    width: 100%;

    &-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 55px;

      & .reaction-icons,
      & .save-icon {
        & .photo-icon {
          width: 26px;
          height: 26px;
        }
      }

      & .reaction-icons {
        & .photo-icon {
          padding: 8px;
        }
      }
    }
  }
}
</style>
