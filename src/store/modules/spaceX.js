import { getLanches } from "@/services/index";

const state = {
  lanches: [],
  loading: true,
};

const mutations = {
  setLanches(state, lanches) {
    state.lanches = lanches;
  },
  setLoading(state, loadingStatus) {
    state.loading = loadingStatus;
  },
};

const actions = {
  async getAllLanches({ commit }) {
    const lanches = await getLanches();
    commit("setLanches", lanches.data);
    commit("setLoading", false);
  },
};

export default {
  namespaced: "spaceX",
  state,
  mutations,
  actions,
};
