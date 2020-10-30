import Vue from 'vue'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

// Vue.component('first-phone', require('./components/FirstPhone').default)
Vue.component('second-table', require('./components/SecondTable').default)

new Vue({
  el: '#app'
}).$mount()
