const state = {
  count: 0,
};

const mutations = {
  addCount(state) {
    state.count++;
  },
  minusCount(state) {
    state.count--;
  },
};

const actions = {
  add({ commit }) {
    commit("addCount");
  },
  minus({ commit }) {
    commit("minusCount");
  },
};

export default {
  namespaced: "counter",
  state,
  mutations,
  actions,
};
