import Vue from 'vue'
import App from './App.vue'
import { Timeline } from "vue2vis";
import "vue2vis/dist/vue2vis.css";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false
Vue.component("timeline", Timeline);
new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
