import * as types from './mutation-types'

export default {
  [types.QUERY] (state, queryText) {
    state.query = queryText
  },
  [types.UPDATEHITS] (state, hits) {
    state.hits = hits
  },
  [types.CATEGORIES] (state, categories) {
    state.categories = categories
  },
  [types.CURRENTPAGE] (state, page) {
    state.currentPage = page
  }
}
