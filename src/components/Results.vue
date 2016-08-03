<template>
  <div class="results">
    <div v-for="hit in hits" class="list-group-item">
      {{{hit._highlightResult.name.value}}}
    </div>
  </div>
</template>
<style>

</style>
<script>
  import {QueryInit} from '../vuex/actions'

  export default{
    ready () {
      QueryInit(this.$store)
    },
    vuex: {
      getters: {
        hits: (state) => state.hits
      },
      actions: {
        QueryInit
      }
    }
  }
</script>
