import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'user',
    password: 'user',
    isLoggedIn: false,
  },
  mutations: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.loggedOut = false;
    },
  },
  actions: {
    login({ commit, state }, { username, password }) {
      if (username === state.username && password === state.password) {
        commit('loggedIn');
        localStorage.setItem('auth-replicate', 'loggeedin');
        router.push('/');
      }
    },
  },
  modules: {
  },
});
