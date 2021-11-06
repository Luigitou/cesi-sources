import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'Louis'
  },
  mutations: {
    changeName (state, name) {
      state.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})
