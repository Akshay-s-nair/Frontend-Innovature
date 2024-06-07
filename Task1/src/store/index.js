import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    result: null,
    err: null,
  },
  mutations: {
    AUTH_SUCCESS(state, payload) {
      state.token = payload.token;
      state.username = payload.username;
    },
    AUTH_LOGOUT(state) {
      state.token = '';
      state.username = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      state.result=0;
    },
    SET_RESULT(state, result) {
      state.result = result;
    },
    SET_ERR(state, err) {
      state.err = err;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
    SET_BACKEND_MESSAGE(state, message) {
      state.backendMessage = message;
    },
    CLEAR_ERROR(state) {
      state.loginError = '';
      state.backendMessage = '';
    },
  },
  actions: {
    async login({ commit }, user) {
      try {
        commit('CLEAR_ERROR'); // Clear existing errors
        const response = await axios.post('/login', {
          email: user.email,
          password: user.password,
        });
        const token = response.data.token;
        const username = response.data.username;
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        commit('AUTH_SUCCESS', { token, username });
      } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        if (error.response ) {
          commit('SET_LOGIN_ERROR', error.response.data.error);
        } else {
          commit('SET_BACKEND_MESSAGE', error.response ? error.response.data.error : 'An error occurred');
        }
        throw new Error('Login failed');
      }
    },
    async register(_, user) {
      try {
        const response = await axios.post('/register', user);
        return response.data;
      } catch (error) {
        console.error('Registration failed:', error.response ? error.response.data : error.message);
        throw error;
      }
    },
    async calculate({ commit, state }, operationData) {
      try {
        const response = await axios.post(`/${operationData.operation}`, {
          num1: operationData.num1,
          num2: operationData.num2,
        }, {
          headers: { Authorization: state.token }
        });
        commit('SET_RESULT', response.data.result);
        commit('SET_ERR', response.data.error);
      } catch (error) {
        commit('SET_RESULT', error.response.data['error']);
        console.error('Calculation failed:', error.response ? error.response.data : error.message);
        throw new Error('Calculation failed');
      }
    },
    logout({ commit }) {
      commit('AUTH_LOGOUT');
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    username: state => state.username,
    result: state => state.result,
    loginError: state => state.loginError,
    backendMessage: state => state.backendMessage,
  }
});

export default store;
