// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../mock/index'

import store from './vuex'


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

console.log(vm)