<template>
  <div class='pager'>
    <button class='previous' v-on:click="prevPage">previous</button>
    <span class='current-page'>{{currentPage + 1}}</span>
    <button class='next' v-on:click="nextPage">Next</button>
  </div>
</template>
<style>

</style>
<script>
  import {prevPage, nextPage} from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        prevPage,
        nextPage
      },
      getters: {
        currentPage: (state) => state.currentPage
      }
    }
  }
</script>
