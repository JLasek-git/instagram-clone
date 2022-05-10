<template>
  <div class="custom-container-c photo__container">
    <div class="photo-header">
      <div class="user-info">
        <div class="user-avatar"></div>
        <div class="user-name">{{ homepagePhotoData.username }}</div>
      </div>
      <div class="utils">
        <img src="../../../../Global/assets/dots.svg" />
      </div>
    </div>
    <div class="photo__container">
      <img :src="require(`@/App/assets/${homepagePhotoData.photoName}`)" />
    </div>
    <div class="comments-section">
      <div class="comments-section-icons">
        <div class="reaction-icons">
          <img
            class="photo-icon"
            :src="
              likedPhotos.includes(homepagePhotoData.id)
                ? require('@/Global/assets/heart.svg')
                : require('@/Global/assets/heart-outline.svg')
            "
            @click="handleHeartIconClick(homepagePhotoData.id)"
          />
          <img class="photo-icon" src="../../../../Global/assets/chat.svg" />
          <img
            class="photo-icon"
            src="../../../../Global/assets/paperplaneoutilned.svg"
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
import { PhotoModel } from "@/Global/models/PhotoModel";
import { defineComponent, PropType, watch, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    homepagePhotoData: {
      type: Object as PropType<PhotoModel>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const likedPhotos = computed<string[]>(
      () => store.getters["getLikedPhotos"]
    );

    function handleHeartIconClick(photoId: string): void {
      if (!likedPhotos.value.includes(photoId)) {
        store.commit("addLikedPhoto", photoId);
      } else {
        store.commit("removeLikedPhoto", photoId);
      }
    }

    return {
      handleHeartIconClick,
      likedPhotos,
    };
  },
});
</script>

<style lang="scss" scoped>
.photo__container {
  height: fit-content;
  width: calc(615px);
  border-radius: $small-border-radius;
  margin-top: 25px;

  & .photo-header {
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;

    & .user-info {
      padding: 0 10px;
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

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
        padding-right: 10px;
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
      & img {
        cursor: pointer;
      }
    }
  }
}
</style>
