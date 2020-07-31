import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import './plugins/bootstrap-vue'
import './plugins/axios'

import './plugins/bootstrap-vue'

Vue.use(Chartkick.use((Chart)))
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
