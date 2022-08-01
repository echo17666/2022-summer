<template>
  <div class="peoplemanage">
    <div class="row">
      <v-col cols="12" md="3">
     <v-navigation-drawer
      permanent
      height="90vh"
    >
     

      <v-list dense>
        <v-list-item
        @click="$router.push({name:'AllMember'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                stars</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>人员列表</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          
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
        <v-list-item
          
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                home</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>回收站</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-col>
    
    <v-col cols="12" md="9">
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

</style>