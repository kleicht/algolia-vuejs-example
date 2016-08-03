import * as algolia from '../api/algolia'
import * as types from './mutation-types'

export const QueryAction = ({dispatch}, query) => {
  algolia.Query(query)
  updateResults({dispatch})
}

export const QueryInit = ({dispatch}) => {
  algolia.QueryInit()
  updateResults({dispatch})
}

export const toggleCategoryAction = ({dispatch}, category) => {
  algolia.toggleFacet(category)
  updateResults({dispatch})
}

export const updateResults = ({dispatch}) => {
  algolia.getResultsAsync().then((data) => {
    dispatch(types.UPDATEHITS, data.hits)
    dispatch(types.CATEGORIES, data.getFacetValues('category', ['selected', 'count:desc']).slice(0, 5))
    dispatch(types.CURRENTPAGE, data.page)
  })
}

export const nextPage = ({dispatch}) => {
  algolia.nextPage()
  updateResults({dispatch})
}

export const prevPage = ({dispatch}) => {
  algolia.prevPage()
  updateResults({dispatch})
}
