<template>


    <v-navigation-drawer
      permanent
      height="100vh"
      width="280px"
      expand-on-hover

      :style="{'background-color':'#bdd5ed'}"
      app
    >
      <template v-slot:prepend >
        <v-list-item two-line >
          <v-list-item-avatar :style="{'maargin-left':'-250px'}">
            <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" :style="{'width':'30px','height':'30px'}">
          </v-list-item-avatar>

          <v-list-item-content v-if="state.islogin==true">
            <v-list-item-title>（没法获取名字）</v-list-item-title>
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
          @click="this.$router.push('/login')"
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
export default {
  name: 'Main',
  data () {
      return {
        state:this.$store.state,
        items: [
          { title: '团队管理', icon: 'home' ,link:'/teams'},
          { title: '项目管理', icon: 'home',link:'/project' },
          { title: '文档编辑', icon: 'home',link:'/document' }
        ],
      }
    },
    methods: {
      turn(link){
        this.$router.push(link)
      },
      logout(){
        this.$store.commit('logout')
        this.$router.push('/login')
      }
    }
    }

</script>
<style scoped>
.v-list-item.v-list-item--two-line.theme--light {
    margin-left: -6px;
    /* color:#bdd5ed */
}
</style>
