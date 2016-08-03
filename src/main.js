import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  el: 'body',
  components: {
    App
  }
})
