import { createStore } from "vuex";
import spaceX from "./modules/spaceX";
import counter from "./modules/count";

export default createStore({
  modules: {
    spaceX,
    counter,
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
