import { getAllCoffees } from "@/services/coffeeServices";

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
    const lanches = await getAllCoffees();
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
