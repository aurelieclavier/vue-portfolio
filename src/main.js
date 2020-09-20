import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueAnalytics from 'vue-analytics';

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VueMaterial)
Vue.use(vueSmoothScroll)

Vue.use(VueAnalytics, {
  id: 'UA-178464620-1',
  router
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

