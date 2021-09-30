import { createStore } from "vuex";
import spaceX from "./modules/spaceX";

export default createStore({
  modules: {
    spaceX,
  },

  state: {
    menuSelectKeys: ["/grid"],
  },
  mutations: {
    changeMenuSelectKeys(state, selectedkey) {
      state.menuSelectKeys = selectedkey;
    },
  },
  actions: {},
});
