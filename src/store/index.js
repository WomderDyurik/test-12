import { createStore } from "vuex";

export default createStore({
  state: {
    childrens: [],
    person: {}
  },
  getters: {
    getChildrens: (state) => state.childrens,
    getPerson: (state) => state.person
  },
  mutations: {
    addChildren(state, payload) {
      state.childrens.push({ name: payload.name, age: payload.age });
    },
    changePersonInfo(state, payload) {
      state.person.age = payload.age
      state.person.name = payload.name
    },

  },
  actions: {
    addChildren(store, obj) {
      store.commit("addChildren", { ...obj });
    },
    changePersonInfo(store, obj) {
      store.commit('changePersonInfo', {...obj})
    },
  },
  modules: {},
});
