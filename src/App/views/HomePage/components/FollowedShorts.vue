<template>
  <div class="custom-container-c shorts__container">
    <ul class="user-shorts-list">
      <UserShort
        v-for="userShort in userShortsArray"
        :key="userShort.username"
        :userAvatarName="userShort.photoName"
        :username="userShort.username"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getUserShorts } from "@/App/services/homepage.service";
import { UserShortModel } from "@/App/models/UserShortModel";
import UserShort from "@/App/views/HomePage/components/UserShort.vue";

export default defineComponent({
  components: {
    UserShort,
  },
  setup() {
    const userShortsArray = ref<UserShortModel[]>([]);
    getUserShorts().then((response) => {
      userShortsArray.value = response;
    });
    return {
      userShortsArray,
    };
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
  }
}
</style>
