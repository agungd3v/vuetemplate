import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  mutations: {
    initializeapp(state) {
      const getBearer = JSON.parse(localStorage.getItem('bearer'))
      if (getBearer) {
        state.user = getBearer.user
        state.token = getBearer.token
      }
    },
    setUser (state, value) {
      state.user = value
    },
    setToken (state, value) {
      state.token = value
    }
  },
  actions: {
    setUser ({ commit }, params) {
      commit('setUser', params)
    },
    setToken ({ commit }, params) {
      commit('setToken', params)
    },
    logout ({ commit }, params = false) {
      if (params) {
        commit('setUser', null)
        commit('setToken', null)
        localStorage.removeItem('bearer')
      }
    }
  },
  getters: {
    user: state => state.user,
    token: state => state.token
  }
})
