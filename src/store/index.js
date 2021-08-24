import { createStore } from 'vuex'
import axios from 'axios';
import {TokenService} from "../services/TokenService";

export default createStore({
  state: {
    token: TokenService.getToken(),
    code: null,
    user: null,
    api_url: process.env.VUE_APP_API_URL,
    issue: null,
    showMenu: false,
  },
  mutations: {
    SET_TOKEN(state, t) {
      TokenService.saveToken(t)
      state.token = t
      axios.defaults.headers.common['Authorization'] = `Bearer ${t}`
    },
    CLEAR_TOKEN() {
      TokenService.removeToken()
    },
    SET_CODE(state, code) {
      state.code = code
    },
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      location.reload()
    },
  },
  actions: {
    IS_LOGGED_IN (context) {
      axios.get(context.api_url + 'user')
    }
  },
  modules: {
  }
})
