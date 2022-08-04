<template>
  <div class="team">
    <div class="row">
      <v-col cols="12" md="2">
     <v-navigation-drawer
      permanent
      height="100vh"
    >
     

      <v-list dense>

         <v-list-item
           @click="$router.push({name:'TeamProject'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>团队项目列表</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        @click="$router.push({name:'MemberList'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>人员列表</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    
       
        <v-list-item
          @click="$router.push({name:'Deleted'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>回收站</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
       
      </v-list>
    </v-navigation-drawer>
    </v-col>
    
    <v-col cols="12" md="10" >
            <router-view/>
    </v-col>
    
  </div>
  </div>
</template>


<script>
export default {
  name: 'Team',
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