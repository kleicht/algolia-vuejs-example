<template>
  <ul class="categories">
    <li v-for="facet in facets" v-bind:class="{active: facet.isRefined}">
      <label v-on:click.prevent="toggleCategoryAction(facet.name, $evt)">
        <input type="checkbox" data-val="{{{facet.name}}}"/>
        {{{facet.name}}}
        <span class="badge">{{facet.count}}</span>
      </label>
    </li>
  </ul>
</template>
<style>

</style>
<script>
  import {toggleCategoryAction} from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        toggleCategoryAction
      },
      getters: {
        facets: (state) => state.categories
      }
    }
  }
</script>
