<template>
  <div class="custom-container-c shorts__container">
    <ul class="user-shorts-list">
      <li class="user-short new-short">
        <div class="photo__wrapper">
          <img src="../../../assets/userPhoto.jpg" />
        </div>
        <div class="user-name">Username</div>
      </li>
      <li class="user-short">
        <div class="photo__wrapper">
          <img src="../../../assets/userPhoto.jpg" />
        </div>
        <div class="user-name">Username</div>
      </li>
      <li class="user-short">
        <div class="photo__wrapper">
          <img src="../../../assets/userPhoto.jpg" />
        </div>
        <div class="user-name">Username</div>
      </li>
      <li class="user-short">
        <div class="photo__wrapper">
          <img src="../../../assets/userPhoto.jpg" />
        </div>
        <div class="user-name">Username</div>
      </li>
      <li class="user-short">
        <div class="photo__wrapper">
          <img src="../../../assets/userPhoto.jpg" />
        </div>
        <div class="user-name">Username</div>
      </li>
      <li class="user-short">
        <div class="photo__wrapper">
          <img src="../../../assets/userPhoto.jpg" />
        </div>
        <div class="user-name">Username</div>
      </li>
      <li class="user-short">
        <div class="photo__wrapper active">
          <img src="../../../assets/userPhoto.jpg" />
        </div>
        <div class="user-name">Username</div>
      </li>
    </ul>
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
.shorts__container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: calc(615px - 40px);
  height: fit-content;
  margin-bottom: 24px;
  padding: 15px 20px;
  border-radius: $small-border-radius;

  & .user-shorts-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style: none;

    & .user-short {
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
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        &::after {
          content: "";
          position: absolute;
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
  }
}
</style>
