<template>
  <div class="about">
    <h1>修改密码</h1>
     <div>
      <el-input v-model="username_change" placeholder="请输入用户名">
        <template slot="prepend">用户名</template>
      </el-input>
    </div>
     <div style="margin-top: 15px;">
      <el-input v-model="password_change" placeholder="请输入原密码" show-password>
        <template slot="prepend">原密码</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="password1" placeholder="请输入密码" show-password>
        <template slot="prepend">修改密码</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="password2" placeholder="请再次输入密码" show-password>
        <template slot="prepend">重复密码</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-button type="primary" @click="changePassword()" round>修改密码</el-button>
    </div>
  </div>
</template>
<script>
import { Account } from "@/api/account.js";
export default {
  name: 'ChangePassword',
  
  data(){
    return{
      password:'',
      password1:'',
      password2:'',
      username_change:'',
      password_change:'',
      username:''
    }
  },
  methods:{
    getUser(){
    Account.getUser()
    .then(res => {
      this.username = res.data.user.user_name;
      this.password = res.data.user.user_password;
      
    })
     .catch((error) => {    
          console.log(error) 
        });
      
    },
    changePassword(){
      if(this.username_change==''){
        this.$notify({
          title: '请输入用户名',
          type: 'warning'
        });
        return;
      }
       if(this.username_change!=this.username){
        this.$notify({
          title: '用户名错误',
          type: 'error'
        });
        return;
      }
      if(this.password_change==''){
        this.$notify({
          title: '请输入原始密码',
          type: 'warning'
        });
        return;
      }
      if(this.password_change!=this.password){
        this.$notify({
          title: '原始密码错误',
          type: 'error'
        });
        return;
      }
      if(this.password1==''){
        this.$notify({
          title: '请输入新密码',
          type: 'warning'
        });
        return;
      }
      if(this.password2==''){
        this.$notify({
          title: '请重复输入新密码',
          type: 'warning'
        });
        return;
      }
      if(this.password1!=this.password2){
        this.$notify({
          title: '新密码不一致',
          type: 'error'
        });
        return;
      }
      let formData= new FormData();
        formData.append('user_name',this.username_change);
        formData.append('user_password',this.password1);
        Account.changeUser(formData)
        .then(res => {
          this.$notify({
            title: '修改成功',
            type: 'success'
          });
          this.$router.push('/profilemanage')
        })
    }
  },
  mounted(){
    this.getUser();
  }
}
</script>