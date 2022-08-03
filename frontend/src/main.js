import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import material from 'material-icons/iconfont/material-icons.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueDragResize from 'vue-drag-resize'


Vue.config.productionTip = false
// import { ElementTiptapPlugin } from "element-tiptap";
import 'element-ui/lib/theme-chalk/index.css';
// 引入 import element-tiptap 样式
import 'element-tiptap/lib/index.css';
Vue.use(ElementUI)
Vue.component('vue-drag-resize', VueDragResize)
Vue.prototype.$axios = axios;
Vue.use( ElementTiptapPlugin, {
  lang: 'zh', // 设置语言为中文
});
// axios.interceptors.request.use(
//   config => {
//     if (this.$store.state.islogin) {
//       config.headers.Authorization = this.$store.state.token;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

new Vue({
  router,
  store,
  vuetify,
  material,
  render: h => h(App)
}).$mount('#app')
