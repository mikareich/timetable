import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDm0o17I6OO2GVhE_WLNtp4qVovnNUF_YY",
  authDomain: "timetable-9793c.firebaseapp.com",
  databaseURL: "https://timetable-9793c.firebaseio.com",
  projectId: "timetable-9793c",
  storageBucket: "timetable-9793c.appspot.com",
  messagingSenderId: "50867825754",
  appId: "1:50867825754:web:ddaf4f003f76e6980c7c63",
  measurementId: "G-QJ0HM492DK"
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
