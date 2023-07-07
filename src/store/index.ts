import { getProducts } from "@/services/getProducts";
import { getProductsBySearch } from "@/services/getProductsBySearch";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    products: (state) => state.products,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }, { categoryId, parameters }) {
      const { elements } = await getProducts(categoryId, {
        ...parameters,
      });
      commit("setProducts", elements);
    },
    async getProductsBySearch({ commit }, parameters) {
      const { elements } = await getProductsBySearch(parameters);
      commit("setProducts", elements);
    },
  },
  modules: {},
});
