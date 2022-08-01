<template>
  <div class="about">
    <h1>注册</h1>
    <div>
      <el-input v-model="username" placeholder="请输入昵称">
        <template slot="prepend">昵称</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="password_1" placeholder="请输入密码" show-password>
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="password_2" placeholder="请确认密码" show-password>
        <template slot="prepend">确认密码</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="realname" placeholder="请输入真实姓名">
        <template slot="prepend">真实姓名</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="email" placeholder="请输入邮箱">
        <template slot="prepend">邮箱</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-button type="primary" @click="register()" round>注册</el-button>
    </div>
    <div style="margin-top: 15px;">
      <el-button @click="login()" round>登录</el-button>
    </div>
  </div>
</template>
<script>
import { Account } from "@/api/account.js";
export default {
  name: 'Register',
  data(){
    return{
      username: '',
      password_1: '',
      password_2: '',
      realname: '',
      email: ''
    }
  },
  methods:{
    register(){
      if(this.username==''){
        this.$notify({
          title: '用户名不能为空！',
          type: 'warning'
        })
        return;
      }
      if(this.password_1==''){
        this.$notify({
          title: '密码不能为空！',
          type: 'warning'
        })
        return;
      }
      if(this.password_2!=this.password_1){
        this.$notify({
          title: '两次密码不一致！',
          type: 'warning'
        })
        return;
      }
      if(this.realname==''){
        this.$notify({
          title: '真实姓名不能为空！',
          type: 'warning'
        })
        return;
      }
      if(this.email==''){
        this.$notify({
          title: '邮箱不能为空！',
          type: 'warning'
        })
        return;
      }
      let formdata = new FormData()
      formdata.append('username',this.username)
      formdata.append('password_1',this.password_1)
      formdata.append('password_2',this.password_2)
      formdata.append('true_name',this.realname)
      formdata.append('email',this.email)
      Account.Register(formdata)
      .then((response) => {      
          console.log(response) 
          if(response.data.msg=='注册成功'){
            this.$notify({
              title: '注册成功',
              type: 'success'
            })
            this.username=''
            this.password_1=''
            this.password_2=''
            this.email=''
            this.realname=''
            this.$router.push('/login')
          }
        })
        .catch((error) => {    
          console.log(error) 
        });
    },
    login(){
      this.$router.push('/login')
    }
  }
}
</script>
<style>
  @import "../../assets/loginAndRegister.css";
</style>