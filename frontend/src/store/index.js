import Vue from 'vue'
import Vuex from 'vuex'
// import user from "./user"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false,
    username:'',
    token:''
  },
  getters: {
  },
  mutations: {
    login(state){
      state.islogin=true;
    },
    logout(state){
      state.islogin=false;
      state.username=''
      state.token='';
      window.localStorage.removeItem("token");
    },
  },
  actions: {
  },
  modules: {
  }
})
