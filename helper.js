const client = algoliasearch('latency', '249078a3d4337a8231f1665ec5a44966');
const $algoliasearchHelper = algoliasearchHelper(client, 'bestbuy', {
  disjunctiveFacets: ['category'],
  hitsPerPage: 7,
  maxValuesPerFacet: 3
});

const SearchBox = Vue.extend({
  template: `
    <div class="form">
      <input
        type="text"
        class="search-box"
        placeholder="Search..."
        v-model="query"
      />
    </div>
  `,
  data() {
    return {query: ''};
  },

  ready() {
    this.$watch('query', query => {
      $algoliasearchHelper.setQuery(query).search();
    });

    $algoliasearchHelper.search();
  }
});

const RefinementList = Vue.extend({
  template: `
      <ul class="categories">
        <li v-for="facet in facets" v-bind:class="{active: facet.isRefined}">
          <label v-on:click.prevent="toggleFacet(facet.name, $evt)">
            <input type="checkbox" data-val="{{{facet.name}}}"/>
            {{{facet.name}}}
            <span class="badge">{{facet.count}}</span>
          </label>
        </li>
      </ul>
  `,
  data() {
    return {
      facets: []
    };
  },

  ready() {
    $algoliasearchHelper.on('result', results => {
      this.facets = results.getFacetValues('category', ['selected', 'count:desc']).slice(0, 5);
    });
  },

  methods: {
    toggleFacet(facetName) {
      $algoliasearchHelper.toggleRefinement('category', facetName).search();
    }
  }
});

const Results = Vue.extend({
  template: `
      <div class="results">
        <div v-for="hit in hits" class="list-group-item">
          {{{hit._highlightResult.name.value}}}
        </div>
      </ul>
  `,
  data() {
    return {
      hits: []
    };
  },

  ready() {
    this.$resultsListener = $algoliasearchHelper.on('result', results => {
      this.hits = results.hits;
    });
  }
});

const Pager = Vue.extend({
  template: `
    <div class='pager'>
    <button class='previous' v-on:click="prevPage">previous</button>
    <span class='current-page'>{{currentPage + 1}}</span>
    <button class='next' v-on:click="nextPage">Next</button>
  </div>
  `,

  data() {
    return {
      currentPage: 0
    }
  },

  ready() {
    $algoliasearchHelper.on('change', (state) => {
      this.currentPage = $algoliasearchHelper.getPage();
    })
  },

  methods: {
    prevPage() {
      if (this.currentPage > 0) {
        $algoliasearchHelper.previousPage().search();
      }
    },

    nextPage() {
      $algoliasearchHelper.nextPage().search();
    }
  }

})

const App = Vue.extend({
  template: `
    <div id="app" class="app">
      <search-box></search-box>
      <refinement-list></refinement-list>
      <results></results>
      <pager></pager>
    </div>
  `,
  components: {
    SearchBox,
    Results,
    RefinementList,
    Pager
  }
});

new Vue({
  el: 'body',
  components: {
    App
  }
})
