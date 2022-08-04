<template>
  <div class="project">
    <div class="row">
      <v-col cols="12" md="2">
     <v-navigation-drawer
      permanent
      height="100vh"
    >
     

      <v-list dense>

        <v-list-item
          @click="$router.push({name:'ViewAll'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>设计原型</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    
       
        <v-list-item
    
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>编辑文档</v-list-item-title>
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