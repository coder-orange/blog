import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// layout page
import defaultLayout from './layout/index.vue'
import loginLayout from './layout/login.vue'

Vue.component('login-layout',loginLayout)
Vue.component('default-layout',defaultLayout)

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
