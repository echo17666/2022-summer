<template>
  <div class="about">
    <h1>登录</h1>
    <div>
      <el-input v-model="username" placeholder="请输入昵称">
        <template slot="prepend">昵称</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="password" placeholder="请输入密码" show-password>
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-button type="primary" @click="login()" round>登录</el-button>
    </div>
    <div style="margin-top: 15px;">
      <el-button @click="register()" round>注册</el-button>
    </div>
  </div>
</template>
<script>
import { Account } from "@/api/account.js";
export default {
  name: 'Login',
  data(){
    return{
      username: '',
      password: '',
      token: ''
    }
  },

    methods: {
    login() {
      if(this.username==''){
        this.$notify({
          title: '用户名不能为空！',
          type: 'warning'
        })
        return;
      }
      if(this.password==''){
        this.$notify({
          title: '密码不能为空！',
          type: 'warning'
        })
        return;
      }
      let formdata = new FormData()
      formdata.append('username',this.username)
      formdata.append('password',this.password)
      Account.Login(formdata)
        .then((response) => {      
          console.log(response) 
          if(response.data.errno==0){
            this.$notify({
              title: '登录成功',
              type: 'success'
            })
            this.$store.commit('login')
            this.$store.state.token=response.data.data.authorization;
            window.localStorage.setItem("token", response.data.data.authorization);
            window.localStorage.setItem("username", this.username);
            this.username=''
            this.password=''
            this.$router.push('/teams')
          }
          else if(response.data.errno==100004){
            this.$notify({
              title: '用户名不存在',
              type: 'warning'
            })
          }
          else if(response.data.errno==100003){
            this.$notify({
              title: '密码错误',
              type: 'warning'
            })
          }
        })
        .catch((error) => {    
          console.log(error) 
        });
      
    },
    register(){
      this.$router.push('/register')
    }
  }
}
</script>
<style>
  @import "../../assets/loginAndRegister.css";
</style>