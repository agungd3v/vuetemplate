import Vue from 'vue'
import Vuex from 'vuex'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  mutations: {
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
        Cookies.remove('vuex')
        return true
      }
    }
  },
  getters: {
    user: state => state.user,
    token: state => state.token
  }
})
