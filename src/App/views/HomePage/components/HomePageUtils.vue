<template>
  <div class="propositions__container">
    <div class="fixed-propositions__wrapper">
      <div class="current-user__container profile-item__container">
        <ProfileItem :userData="currentUserData" plainBtnText="Przełącz" />
      </div>
      <div class="suggestions__container">
        <div class="suggestions-utils__container">
          <span class="your-suggestions">Propozycje dla ciebie</span>
          <span class="see-all plain-btn-gray">Zobacz wszystkich</span>
        </div>
        <div class="suggestions-items__container">
          <ProfileItem v-for="n in 5" :key="n" :userData="currentUserData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ProfileItem from "@/App/views/HomePage/components/ProfileItem.vue";
import { UtilsUserModel } from "@/App/models/UtilsUserModel";

export default defineComponent({
  components: {
    ProfileItem,
  },
  setup() {
    const currentUserData = ref<UtilsUserModel>({
      username: "Username",
      realName: "Jane Doe",
      photoName: "",
    });

    return {
      currentUserData,
    };
  },
});
</script>

<style lang="scss" scoped>
.propositions__container {
  .fixed-propositions__wrapper {
    position: fixed;
    width: 295px;
    height: 350px;

    & .suggestions__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: $small-font-size;
      margin-top: 24px;

      & .suggestions-utils__container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        & .your-suggestions {
          font-weight: bold;
          color: $light-text-color;
        }
      }

      & .suggestions-items__container {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
