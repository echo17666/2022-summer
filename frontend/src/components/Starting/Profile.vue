<template>
  <div class="profile">
    <h1>个人中心</h1>

<el-form class="demo-ruleForm">

<v-col cols="12" md="10">
       <el-form-item label="头像">
         <v-col></v-col>
        <v-img

                  class="img-fluid"
                  :src="userUrl"
                  alt="Image Description"
                  style="width: 180px;height: 180px;margin-top: 30px"
              />
     </el-form-item>
</v-col>

     <v-col cols="12" md="2">
 <el-button
                @click="addFile">
              更换头像
            </el-button>
   <input type="file" ref="upload_input" style="display: none;" @change="select_file" accept=".png,.jpg,.jpeg">


    </v-col>
<v-col cols="12" md="10">
       <el-form-item label="用户名">
   <el-input v-model="username" style="max-width: 4000px"></el-input>
     </el-form-item>
</v-col>
     <v-col cols="12" md="2" >
   <el-button @click="changeName()">更改</el-button>


</v-col>
  <v-col cols="12" md="10">
   <el-form-item label="邮箱" text-align="left" style="margin-bottom: 0">
  <span class="d-flex justify-start">{{email}}</span>
  </el-form-item>
  </v-col>
  <v-col cols="12" md="10">
  <el-form-item label="真实姓名">
      <span class="d-flex justify-start">{{truename}}</span>
  </el-form-item>
  </v-col>
    </el-form>





  </div>
</template>
<script>

import { Account } from "@/api/account.js";
export default {
  name: 'Profile',

    data () {
    return {

      password:'',
      password1:'',
      password2:'',
      username:'',
      email:'',
      truename:'',
      userUrl:'',
      select_file_data: "",
    }
  },
  methods: {

    getUser(){
    Account.getUser()
    .then(res => {
      this.username = res.data.user.user_name;
      this.email = res.data.user.user_email;
      this.truename = res.data.user.user_true_name;
      this.password = res.data.user.user_password;
      this.userUrl = res.data.user.user_profile_url;
    })
     .catch((error) => {
          console.log(error)
        });

    },
    changeName(){
      let formData=new FormData();
      formData.append('user_name',this.username);
      formData.append('user_password',this.password);
    Account.changeUser(formData)
    .then(res => {
        console.log(res)
         window.localStorage.setItem("username", this.username);
         this.$notify({
          title: '修改成功',
          type: 'success'
        });
        this.getUser()
    })
     .catch((error) => {
          console.log(error)
        });

    },
    addFile() {
      this.$refs.upload_input.click() // 通过 ref 模拟点击
    },
    select_file(file) {
      this.select_file_data = file.target.files
      console.log(this.select_file_data)
      let uploads = new FormData()
      if (this.select_file_data != "") {
        uploads.append("user_profile", this.select_file_data[0])
        Account.UploadImage(uploads)
            .then((res) => {
              this.$notify({
          title: '头像修改成功',
          type: 'success'
        });
        this.getUser();
            })


            .catch((err) => {
              console.log(err)
            })
      }
    },
  },
  mounted(){
    this.getUser();
  }
}
</script>
<style>
.profile{
  text-align:left;
  padding: 30px;
}
</style>
