import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCode,
  faCogs,
  faPlus,
  faWrench,
  faLightbulb,
  faFilePdf,
  faLinkedin,
  faGithub,
  faCodepen,
  faPhone,
  faAt,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import vueSmoothScroll from 'vue2-smooth-scroll'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VueMaterial)
Vue.use(vueSmoothScroll)

library.add(faCode, faCogs, faPlus, faWrench, faLightbulb, faFilePdf, faLinkedin, faGithub, faCodepen, faPhone, faAt, faChevronLeft, faChevronRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
