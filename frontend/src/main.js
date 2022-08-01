import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import material from 'material-icons/iconfont/material-icons.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  vuetify,
  material,
  render: h => h(App)
}).$mount('#app')
