import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

// initial state
const state = {
  query: '',
  hits: [],
  categories: [],
  currentPage: 1
}

export default new Vuex.Store({
  state,
  mutations
})
