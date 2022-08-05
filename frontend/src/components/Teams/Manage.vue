<template>
  <div class="peoplemanage">
    <div class="row">
      <v-col cols="12" md="2">
     <v-navigation-drawer
      permanent
      height="100vh"
    >
     

      <v-list dense>

        
        <v-list-item
        @click="$router.push({name:'AllTeams'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                stars</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>团队列表</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="$router.push({name:'CreateTeam'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                add_circle_outline</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>创建团队</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
       
        
      </v-list>
    </v-navigation-drawer>
    </v-col>
    
    <v-col cols="12" md="10">
            <router-view/>
            </v-col>
    
  </div>
  </div>
</template>


<script>
export default {
  name: 'PeopleManage',
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