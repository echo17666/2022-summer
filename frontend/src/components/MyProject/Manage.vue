<template>
  <div class="projectmanage">
    <div class="row">
      <v-col cols="12" md="2">
     <v-navigation-drawer
      permanent
      height="100vh"
    >
     

      <v-list dense>
        <v-list-item
        @click="$router.push({name:'ShowAll'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>所有项目</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
           @click="$router.push({name:'MeCreate'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>我创建的</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
           @click="$router.push({name:'MeAttend'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>我加入的</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        
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
  name: 'ProjectManage',
  data(){
    return {
        
      }
  },
    methods: {

  
  }
}
</script>
<style>

</style>
