import Vue from 'vue'
import index from './index'
import router from './router'
// import 'font-awesome/css/font-awesome.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { index },
  template: '<index/>'
})
