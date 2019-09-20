import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import axios from 'axios'
import VueAxios from 'vue-axios' 

Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false;

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
