import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.component('v-select', vSelect);

new Vue({
  render: h => h(App),
}).$mount('#app');
