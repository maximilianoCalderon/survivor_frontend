import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSelectImage from 'vue-select-image'
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import axios from 'axios';
import Toast from "vue-toastification";
import VueSessionStorage from "vue-sessionstorage";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
require('vue-select-image/dist/vue-select-image.css')

fetch('/config.json')
.then(res => res.json())
.then(config => {
    axios.defaults.baseURL = config.api_route;
    Vue.prototype.$config = config;
    Vue.config.productionTip = false
    Vue.use(Toast, {

    });
    Vue.use(VueSessionStorage);
    Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
    Vue.use(VueSelectImage);
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
})


