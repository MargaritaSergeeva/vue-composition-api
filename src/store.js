import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      title: 'Vuex + Composition    '
    }
  },
  getters: {
    appTitle (state) {
      return state.title.trim()
    }
  }
})
