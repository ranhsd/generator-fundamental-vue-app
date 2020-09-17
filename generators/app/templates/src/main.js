import Vue from 'vue'
import App from './App.vue'
import FundamentalVue from 'fundamental-vue';
import router from "./router";
import '@/assets/css/tailwind.css'



Vue.use(FundamentalVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
