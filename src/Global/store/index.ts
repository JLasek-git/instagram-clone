import { createStore } from "vuex";

interface State {
  likedPhotos: string[];
}

export default createStore<State>({
  state: {
    likedPhotos: [] as string[],
  },
  getters: {
    getLikedPhotos(state) {
      return state.likedPhotos;
    },
  },
  mutations: {
    addLikedPhoto(state, photoId) {
      state.likedPhotos.push(photoId);
    },
    removeLikedPhoto(state, photoId) {
      state.likedPhotos = state.likedPhotos.filter((id) => id !== photoId);
    },
  },
  actions: {},
  modules: {},
});
