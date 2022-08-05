<template>
  <div class="project" style="margin-top:10px">
    <div class="row">
      <v-col cols="12" md="2">
     <v-navigation-drawer
      permanent
      height="100vh"
    >
     

      <v-list dense>

        <v-list-item
          @click="jumpPrototype"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                architecture</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>设计原型</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    
       
        <v-list-item
    @click="jumpEdit"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
               description</span>
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
      jumpEdit(){
        var url=window.location.href.split('/')
        var urle=url[5]
        if(urle!="newdocument"){
          this.$router.push({name:'DocumentEdit'})
        }
      },
      jumpPrototype(){
        var url=window.location.href.split('/')
        // console.log(url)
        var urle=url[5]
        // console.log(urle)
        if(urle!="viewall"){
          this.$router.push({name:'ViewAll'})
        }
      }
       
  }
}
</script>

<style>

</style>