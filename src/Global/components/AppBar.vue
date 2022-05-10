<template>
  <div class="app-bar__container">
    <div class="navigation-items__container">
      <div class="logo__container">
        <img
          class="logo-img"
          src="../assets/instagram-logo.png"
          @click="$router.push(AppRoutesEnum.HomePage)"
        />
      </div>
      <div v-if="!$route.meta.noUtils" class="search-bar__container">
        <SearchBar />
      </div>
      <nav v-if="!$route.meta.noUtils" class="navigation__container">
        <div class="icons__container">
          <img src="../assets/home.svg" />
          <img src="../assets/paperplaneoutilned.svg" />
          <img src="../assets/circleplus.svg" />
          <img src="../assets/compass.svg" />
          <img src="../assets/heart-outline.svg" />
          <div class="profile-icon"></div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/Global/components/SearchBar.vue";
import { AppRoutesEnum } from "@/App/enums/AppRoutes/appRoutesEnum";

export default defineComponent({
  components: {
    SearchBar,
  },
  setup() {
    return {
      AppRoutesEnum,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-bar__container {
  position: fixed;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: $base-border;
  background-color: $primary-color;
  z-index: 9999;

  .navigation-items__container {
    width: $desktop-parent-container-width;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 20px;

    & .logo__container {
      display: flex;
      justify-content: flex-start;
      flex: 1 0 130px;

      & .logo-img {
        cursor: pointer;
      }
    }

    & .search-bar__container {
      display: flex;
      flex: 0 1 auto;
    }

    & .navigation__container {
      display: flex;
      justify-content: flex-end;
      flex: 1 0 130px;

      .icons__container {
        width: 280px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        & img {
          width: 28px;
          height: 28px;
          cursor: pointer;
        }

        & .profile-icon {
          width: 24px;
          height: 24px;
          background: gray;
          border-radius: 50%;
        }
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  .search-bar__container {
    display: none !important;
  }
}
</style>
