import Vue from 'vue'
import App from './App.vue'
import { Timeline } from "vue2vis";
import "vue2vis/dist/vue2vis.css";
Vue.config.productionTip = false
Vue.component("timeline", Timeline);
new Vue({
  render: h => h(App),
}).$mount('#app')
