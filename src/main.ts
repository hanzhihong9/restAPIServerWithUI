import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


// export const appData = {
//   app_icon: 'code',
//   body_message: 'Hello world!',
//   footer_message: 'Made with ❤️ in Mountain View, California',
//   title: 'Vue, Vuetify, Webpack',
//   time: new Date(),
// };

// setInterval(() => {
//   appData.time = new Date()
// }, 1000);
