import { createStore } from 'vuex'

export default createStore({
  state: {
    showNav : true,
  },
  getters: {
  },
  mutations: {
    toggleEveryDisplay(state) {
      state.showNav = !state.showNav;
    },
  },
  actions: {
  },
  modules: {
  }
})
