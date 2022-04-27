import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./mixins/functions";
Vue.config.productionTip = false;

new Vue({
  // mixins: [functions],
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
