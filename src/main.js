import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import '../public/reset.css'

// import login from './views/loginRegister.Vue'
// import home from './views/homepage.vue'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
