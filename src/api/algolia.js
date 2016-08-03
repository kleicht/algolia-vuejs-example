import algoliasearch from 'algoliasearch'
import algoliasearchHelper from 'algoliasearch-helper'

const client = algoliasearch('latency', '249078a3d4337a8231f1665ec5a44966')
const helper = algoliasearchHelper(client, 'bestbuy', {
  disjunctiveFacets: ['category'],
  hitsPerPage: 7,
  maxValuesPerFacet: 3
})

export const getResultsAsync = () => {
  return new Promise((resolve, reject) => {
    helper.once('result', (data) => {
      resolve(data)
    })
  })
}

export const Query = (query) => {
  helper.setQuery(query).search()
}

export const QueryInit = () => {
  helper.search()
}

export const toggleFacet = (facetName) => {
  helper.toggleRefinement('category', facetName).search()
}

export const nextPage = () => {
  helper.nextPage().search()
}

export const prevPage = () => {
  helper.previousPage().search()
}
