<template>


    <v-navigation-drawer
      permanent
      height="100vh"
      width="290px"
      expand-on-hover

      :style="{'background-color':'#bdd5ed'}"
      app
    >
      <template v-slot:prepend >
        <v-list-item two-line >
          <v-list-item-avatar :style="{'maargin-left':'-250px'}">
            <router-link :to="{'name':'Profile'}">
            <img :src="userUrl" :style="{'width':'50px','height':'50px'}">
            </router-link>
          </v-list-item-avatar>

          <v-list-item-content v-if="state.islogin==true">
            <v-list-item-title>{{
              state.username}}</v-list-item-title>
            <v-list-item-subtitle>已登录</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-content v-else>
            <v-list-item-title>请先登录</v-list-item-title>

          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="turn(item.link)"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                {{item.icon}}</span>
          </v-list-item-icon>


          <v-list-item-content >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
<v-list-item
          @click="$router.push('/')"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined" >
               home</span>
          </v-list-item-icon>


          <v-list-item-content >
            <v-list-item-title >回到主页</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          @click="logout()"
          v-if="state.islogin==true"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined" >
                logout</span>
          </v-list-item-icon>


          <v-list-item-content >
            <v-list-item-title >登出</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          @click="$router.push('/login')"
          v-else
        >
          <v-list-item-icon>
            <span class="material-icons-outlined" >
                login</span>
          </v-list-item-icon>


          <v-list-item-content >
            <v-list-item-title >登录</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>


</template>
<script>
import { Account } from "@/api/account.js";
export default {
  name: 'Main',
  data () {
      return {
        timer: 0,
        state:this.$store.state,
        username:'',
        truename:'',
        email:'',
        userUrl:'',
        items: [
          { title: '团队管理', icon: 'group' ,link:'/teams'},
          { title: '个人中心', icon: 'account_circle' ,link:'/profilemanage'},
         
          
        ],
      }
    },
    methods: {
       getUser(){
    Account.getUser()
    .then(res => {
      this.username = res.data.user.user_name;
      this.email = res.data.user.user_email;
      this.truename = res.data.user.user_true_name;
      this.userUrl = res.data.user.user_profile_url;
    })
     .catch((error) => {    
          console.log(error) 
        });
      
    },
      turn(link){
        if(this.state.islogin){
        this.$router.push(link)
        }
        else{
           this.$notify({
              title: '请先登录',
              type: 'warning'
            })
            this.$router.push('/login')
        }
      },
      logout(){
        this.$store.commit('logout')
        this.$router.push('/login')
      }
    },
    watch: {
    user: {
      handler() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.state.islogin==true) {
            this.state.username=window.localStorage.getItem("username")
            this.getUser()
          }
        }, 1000);
      },
      immediate: true
    }
  },
    }

</script>
<style scoped>
.v-list-item.v-list-item--two-line.theme--light {
    margin-left: -6px;
    /* color:#bdd5ed */
}
</style>
