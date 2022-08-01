<template>
  <div class="about">
    <h1>This is Register page</h1>
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
      <el-button type="primary" @click="login()" round>登录</el-button>
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
      password: '',
      realname: '',
      email: ''
    }
  },
  methods:{
    register(){
      let formdata = new FormData()
      formdata.append('username',this.username)
      formdata.append('password',this.password)
      formdata.append('realname',this.realname)
      formdata.append('email',this.email)
      Account.Register(formdata)
      .then((response) => {      
          console.log(response) 
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