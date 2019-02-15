import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@/assets/stylesheet/main.stylus";
import "typeface-roboto";

Vue.use(Vuetify, {
  iconfont: "md"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount("#app");
