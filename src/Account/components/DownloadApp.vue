<template>
  <div class="download-app__container">
    <span class="download-app-text">Pobierz aplikację.</span>
    <div class="download-app-btns__container">
      <a
        href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
        target="blank"
      >
        <img
          class="download-app-img app-store-download-btn"
          src="../../Global/assets/appStoreDownload.png"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DC8F5942B-C4F2-41F7-BA1B-4E935381886A%26utm_content%3Dlo%26utm_medium%3Dbadge"
        target="blank"
      >
        <img
          class="download-app-img"
          src="../../Global/assets/GooglePlayDownload.png"
        />
      </a>
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
