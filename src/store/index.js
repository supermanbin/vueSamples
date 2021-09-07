import { createStore } from "vuex";

export default createStore({
  state: {
    menuSelectKeys: ["/grid"],
  },
  mutations: {
    changeMenuSelectKeys(state, selectedkey) {
      state.menuSelectKeys = selectedkey;
    },
  },
  actions: {},
  modules: {},
});
