// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Chart from 'chart.js';
import VueChartkick from 'vue-chartkick'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGoogleCharts from 'vue-google-charts'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'
import VueCharts from 'vue-charts'
import cBM_Industries from './components/cBM_Industries.vue'
import comp_details from './components/comp_details.vue'
import I_O_overview from './components/I_O_overview.vue'
import intern_det from './components/intern_det.vue'
import comp_int from './components/comp_int.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueGoogleCharts);
Vue.use(AmCharts);
Vue.use(AmSerial);
Vue.use(VueChartkick, {adapter: Chart});
Vue.use(VueFire)
Vue.use(router)
Vue.use(BootstrapVue)
Vue.use(VueCharts);

Vue.component('app-I_O_overview', I_O_overview)
Vue.component('app-cbm_industries', cBM_Industries);
Vue.component('app-comp-details', comp_details);
Vue.component('app-intern-det', intern_det);
Vue.component('app-comp-int', comp_int);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
