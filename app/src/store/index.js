import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '../http/http-common'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    pages: []
  },
  actions: {
    FETCH_PAGES: function({commit, state}, $route) {

      var url = 'wp-json/wp/v2/pages/?orderby=menu_order&order=asc'
      var draft = $route.query.draft
      if(state.preview) {
        url = url + '&include=' + $route.params.id + '&status=draft'
      }

      HTTP.get(url)
      .then(response => {
        commit('SET_PAGES_LIST', { list: response.data })
      })
      .catch(e => {
        console.log(e)
      })
    },
    
  },
  mutations: {

    SET_PAGES_LIST: (state, { list }) => {
      state.pages = list
    }

  },
  getters: {
    
  }
})
export default store