<template>
  <div class="homepage__container">
    <div class="left-side__container">
      <FollowedShorts />
      <SinglePhoto v-for="n in 10" :key="n" />
    </div>
    <div class="right-side__container">
      <HomePageUtils />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FollowedShorts from "@/App/views/HomePage/components/FollowedShorts.vue";
import SinglePhoto from "@/App/views/HomePage/components/SinglePhoto.vue";
import HomePageUtils from "@/App/views/HomePage/components/HomePageUtils.vue";

export default defineComponent({
  components: {
    HomePageUtils,
    FollowedShorts,
    SinglePhoto,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.homepage__container {
  position: relative;
  width: 935px;
  height: fit-content;
  margin-bottom: 24px;

  & .right-side__container {
    position: absolute;
    top: 40px;
    right: 0;
    width: 295px;
    height: 100%;
  }
}
</style>
