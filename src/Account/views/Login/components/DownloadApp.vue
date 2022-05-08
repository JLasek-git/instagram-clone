<template>
  <div class="download-app__container">
    <span class="download-app-text">Pobierz aplikację.</span>
    <div class="download-app-btns__container">
      <img
        class="download-app-img app-store-download-btn"
        src="../../../../Global/assets/appStoreDownload.png"
      />
      <img
        class="download-app-img"
        src="../../../../Global/assets/GooglePlayDownload.png"
      />
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
.download-app__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: $small-font-size;

  & .download-app-img {
    width: 140px;
    height: 40px;
  }

  & .download-app-btns__container {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
