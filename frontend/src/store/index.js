import Vue from 'vue'
import Vuex from 'vuex'
// import user from "./user"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false,
    username:'',
    token:'',
    listTemp:null,
    content:''
  },
  getters: {
  },
  mutations: {
    content(state,val){
      state.content = val
    },
    login(state){
      state.islogin=true;
    },
    changeList(state,n){
      debugger
      state.listTemp = n;
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
