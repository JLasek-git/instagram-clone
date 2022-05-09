<template>
  <div class="homepage__container">
    <div class="left-side__container">
      <FollowedShorts />
      <SinglePhoto v-for="n in 10" :key="n" />
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
  height: fit-content;
  margin-bottom: 24px;
}
</style>
