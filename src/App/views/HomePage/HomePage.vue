<template>
  <div class="homepage__container">
    <div class="left-side__container">
      <FollowedShorts />
      <SinglePhoto />
    </div>
    <div class="right-side__container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FollowedShorts from "@/App/views/HomePage/components/FollowedShorts.vue";
import SinglePhoto from "@/App/views/HomePage/components/SinglePhoto.vue";

export default defineComponent({
  components: {
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
  width: 100%;
  height: 100%;
}
</style>
