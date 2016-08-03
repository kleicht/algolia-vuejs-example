<template>
  <div class="form">
    <input class="search-boxx" @keyup="QueryAction(inputquery)" v-model="inputquery">
  </div>
</template>
<style>
  .search-boxx {
    font-size: 18px;
    padding: 1em 0.75em;
    width: 100%;
    appearance: none;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background: #fff url("data:image/svg+xml;utf8,<svg width=\'48\' height=\'48\' viewBox=\'0 0 48 48\' xmlns=\'http://www.w3.org/2000/svg\'><title>Shape</title><path d=\'M47.008 41.814L32.016 27.13c1.754-2.77 2.68-5.97 2.68-9.263 0-9.565-7.783-17.35-17.348-17.35C7.783.518 0 8.302 0 17.868c0 9.565 7.783 17.346 17.348 17.346 3.654 0 7.15-1.133 10.127-3.28l14.908 14.604c.62.61 1.44.945 2.313.945.896 0 1.736-.354 2.363-.994 1.273-1.302 1.25-3.398-.052-4.674zm-29.66-11.396c-6.92 0-12.55-5.63-12.55-12.55 0-6.92 5.63-12.55 12.55-12.55 6.92 0 12.55 5.63 12.55 12.55 0 3.258-1.243 6.346-3.5 8.695-2.39 2.486-5.605 3.855-9.05 3.855z\' fill=\'%23#{$icon-color}\' fill-rule=\'evenodd\'/></svg>") no-repeat center right 24px / 32px;
    border-radius: 4px;
  }
</style>
<script>
  import {QueryAction} from '../vuex/actions'

  export default{
    data () {
      return {
        inputquery: ''
      }
    },
    vuex: {
      actions: {
        QueryAction
      }
    }
  }
</script>
