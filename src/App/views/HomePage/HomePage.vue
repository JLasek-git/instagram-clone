<template>
  <div class="homepage__container">
    <div class="left-side__container">
      <FollowedShorts />
      <SinglePhoto
        v-for="homepagePhoto in homepagePhotosArray"
        :key="homepagePhoto.id"
        :homepagePhotoData="homepagePhoto"
      />
    </div>
    <div class="right-side__container">
      <HomePageUtils />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FollowedShorts from "@/App/views/HomePage/components/FollowedShorts.vue";
import SinglePhoto from "@/App/views/HomePage/components/SinglePhoto.vue";
import HomePageUtils from "@/App/views/HomePage/components/HomePageUtils.vue";
import { getHomepagePhotos } from "@/App/services/homepage.service";
import { PhotoModel } from "@/Global/models/PhotoModel";

export default defineComponent({
  components: {
    HomePageUtils,
    FollowedShorts,
    SinglePhoto,
  },
  setup() {
    const homepagePhotosArray = ref<PhotoModel[]>([]);

    getHomepagePhotos().then((response) => {
      homepagePhotosArray.value = response;
    });

    return {
      homepagePhotosArray,
    };
  },
});
</script>

<style lang="scss" scoped>
.homepage__container {
  position: relative;
  width: $desktop-parent-container-width;
  height: fit-content;
  margin-bottom: $default-margin;

  & .right-side__container {
    position: absolute;
    top: 40px;
    right: 0;
    width: 295px;
    height: 100%;
  }
}
</style>
