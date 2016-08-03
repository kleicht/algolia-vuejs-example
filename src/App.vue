<template>
  <div class="app">
    <search-box></search-box>
    <refinement-list></refinement-list>
    <results></results>
    <pager></pager>
  </div>
</template>

<script>
  import SearchBox from './components/SearchBox.vue'
  import Results from './components/Results.vue'
  import RefinementList from './components/RefinementList.vue'
  import Pager from './components/Pager.vue'

  export default {
    components: {
      SearchBox,
      Results,
      RefinementList,
      Pager
    }
  }
</script>

<style lang="scss">
  $sidebar-width: 360px;
  $background-color: #efefef;
  $icon-color: A7A7A7; // Don't add the hash sign.
  $accent-color: #42A5EE;

  @mixin greenTick() {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background: url("data:image/svg+xml;utf8,<svg viewBox=\'0 0 62 46\' xmlns=\'http://www.w3.org/2000/svg\'><title>Shape</title><path d=\'M60.467 1.54c-1.562-1.562-4.096-1.562-5.658 0L20.867 35.48 7.194 21.806c-1.562-1.562-4.095-1.562-5.657 0-1.562 1.562-1.562 4.095 0 5.657L18.04 43.966c.78.78 1.805 1.172 2.83 1.172 1.023 0 2.046-.39 2.828-1.172l36.77-36.77c1.56-1.562 1.56-4.094 0-5.656z\' fill=\'%2314C145\' fill-rule=\'evenodd\'/></svg>") no-repeat center center / 70%;
  }

  :root {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 1em;
  }

  body {
    background: $background-color;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  input[type="checkbox"] {
    display: inline-block;
    float: left;
    width: 24px;
    height: 24px;
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid rgba(black, 0.2);
    text-align: center;
    margin: 8px 8px 0 0;
    border-radius: 3px;
    line-height: 42px;
    cursor: pointer;

    &:checked:before {
      @include greenTick();
    }
  }

  header {
    padding: 0 1em;
    max-width: 1200px;
    margin: auto;

    a {
      color: inherit;
      text-decoration: none;
    }
    span {
      color: $accent-color;
    }

    @media (max-height: 790px) and (max-width: 730px) {
      display: none;
    }
  }

  .app {
    padding: 1em;
    max-width: 1200px;
    margin: auto;
    position: relative;

    .search-box {
      font-size: 18px;
      padding: 1em 0.75em;
      width: 100%;
      appearance: none;
      border: none;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      background: #fff url("data:image/svg+xml;utf8,<svg width=\'48\' height=\'48\' viewBox=\'0 0 48 48\' xmlns=\'http://www.w3.org/2000/svg\'><title>Shape</title><path d=\'M47.008 41.814L32.016 27.13c1.754-2.77 2.68-5.97 2.68-9.263 0-9.565-7.783-17.35-17.348-17.35C7.783.518 0 8.302 0 17.868c0 9.565 7.783 17.346 17.348 17.346 3.654 0 7.15-1.133 10.127-3.28l14.908 14.604c.62.61 1.44.945 2.313.945.896 0 1.736-.354 2.363-.994 1.273-1.302 1.25-3.398-.052-4.674zm-29.66-11.396c-6.92 0-12.55-5.63-12.55-12.55 0-6.92 5.63-12.55 12.55-12.55 6.92 0 12.55 5.63 12.55 12.55 0 3.258-1.243 6.346-3.5 8.695-2.39 2.486-5.605 3.855-9.05 3.855z\' fill=\'%23#{$icon-color}\' fill-rule=\'evenodd\'/></svg>") no-repeat center right 24px / 32px;
      border-radius: 4px;
    }

    .categories,
    .facet-list,
    .results,
    .pager {
      float: left;
      border-radius: 4px;
      margin-right: 16px;
      margin-left: 0;
      margin-top: 1em;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      background: #fff;
    }

    .categories,
    .facet-list {
      max-width: $sidebar-width;
      width: 100%;
      padding: 1em 0.5em;

      li {
        padding: 0 8px;
        float: left;
        display: inline-block;
        height: 42px;
        line-height: 42px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-bottom: 0.25em;

        &:not(:last-child) {
          border-bottom: 1px solid rgba(black, 0.1);
        }

        &:hover {
          color: #14C145;
        }

        &.active input:before {
          @include greenTick();
        }

        .badge {
          background: $accent-color;
          color: #fff;
          padding: 0.25em 0.5em;
          border-radius: 14px;
          font-size: 12px;
          max-height: 22px;
          text-align: right;
        }
      }

      @media (max-width: 900px) {
        width: 100%;
        max-width: 100%;
      }
    }

    .results {
      position: relative;
      margin-right: 0;
      max-width: calc(100% - #{$sidebar-width} - 16px);
      width: 100%;
      overflow: auto;
      padding: 1em;

      @media (max-width: 900px) {
        max-width: 100%;
      }

      div {
        padding: 0.75em 0.75em;
        border-bottom: 1px solid #efefef;
        padding-left: 2.5em;
        position: relative;

        &:before {
          display: block;
          float: left;
          content: '';
          width: 2.5em;
          height: 1em;
          position: absolute;
          left: 0;
          background: url("data:image/svg+xml;utf8,<svg viewBox=\'0 0 37 61\' xmlns=\'http://www.w3.org/2000/svg\'><title>Shape</title><path d=\'M10.87 58.832l24.328-24.33c.027-.025.065-.033.09-.06 1.147-1.146 1.716-2.66 1.712-4.17.004-1.51-.564-3.023-1.71-4.17-.028-.027-.065-.034-.092-.06L10.868 1.713C8.585-.57 4.846-.57 2.562 1.714.278 4 .277 7.738 2.56 10.022l20.252 20.25L2.56 50.525c-2.285 2.285-2.285 6.024 0 8.308 2.285 2.285 6.024 2.285 8.31 0z\' fill=\'%23#{$icon-color}\' fill-rule=\'evenodd\'/></svg>") no-repeat center center / contain;
        }
      }

      em {
        background: #FDBD57;
        padding: 0.15em;
      }
    }

    .pager {
      width: 100%;
      margin-right: 0;
      padding: 1em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      text-align: center;

      button,
      span {
        flex: 33%;
      }

      button {
        background: $accent-color;
        color: #fff;
        appearance: none;
        -webkit-appearance: none;
        border: 0;
        padding: 0.5em 0.25em;
        cursor: pointer;
        border-radius: 4px;
        font-size: 18px;

        &:hover {
          background: mix($accent-color, #000, 85%);
        }
      }

      span {
        line-height: 32px;
        font-weight: bold;
      }
    }
  }

</style>
