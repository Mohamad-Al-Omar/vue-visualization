import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    overlay: false,
  },
  getters: {
    getOverlay: (state) => state.overlay,
  },
  mutations: {
    setOverlay: (state, payload) => (state.overlay = payload),
  },
  actions: {
    setOverlay: (context, payload) => {
      context.commit("setOverlay", payload);
    },
  },
  modules: {},
});
