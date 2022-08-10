<template>
  <div class="peoplemanage">
    <div class="row">
      <v-col cols="12" md="2" :style="{'padding-right':'0px'}">
     <v-navigation-drawer
      permanent
      height="100vh"
    >
     

      <v-list dense>

        
        <v-list-item
        @click="$router.push({name:'Profile'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                stars</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>个人信息</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="$router.push({name:'ChangePassword'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                settings</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>修改密码</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
       
        
      </v-list>
    </v-navigation-drawer>
    </v-col>
    
    <v-col cols="12" md="10" :style="{'background-color':'#EEEEEE'}">
            <router-view/>
            </v-col>
    
  </div>
  </div>
</template>


<script>
export default {
  name: 'ProfileManage',
  data(){
    return {
    
      }
  },
    methods: {
       
  }
}
</script>

<style>
.router-link-active {
  text-decoration: none;
  color: yellow;
  color: #4cabeb;
}

a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>