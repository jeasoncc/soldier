import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apptheme: false
  },
  mutations: {
    trueapptheme(state: any) {
      state.apptheme = true;
    },
    falseapptheme(state: any) {
      state.apptheme = false;
    }
  },
  actions: {}
});
