<template>
  <div class="project" style="margin-top:10px">
    <div class="row">
      <v-col cols="12" md="2">
     <v-navigation-drawer
      permanent
      height="100vh"
    >
     

      <v-list dense>

              <v-list-group
            prepend-icon="folder"
             @click="$router.push({name:'AllDocs'})"
           
        >
          <template v-slot:activator>
            <v-list-item-title>文档中心</v-list-item-title>
          </template>

          <v-list-group
              no-action
              sub-group
              prepend-icon="folder_open"
              style="margin-left: 6px"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>项目文档区</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-group
                no-action
                sub-group
                prepend-icon="folder_open"
                style="margin-left: 6px"
                v-for="(title,i) in Projects"
                :key="i"
                link
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="title.name"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                  v-for="(title,i) in title.list"
                  :key="i"
                  link
                  style="padding-left: 40px"
                  @click="$router.push({name:'ShowDoc',params:{docid:title.id}})"
              >
                <v-list-item-title v-text="title.name"></v-list-item-title>
                {{title.id}}
              </v-list-item>

            </v-list-group>


          </v-list-group>

          <v-list-group
              no-action
              sub-group
              prepend-icon="folder_open"
              style="margin-left: 6px"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>其他文档</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="(title, i) in otherDocuments"
                :key="i"
                link
                style="padding-left: 46px"
            >
              <v-list-item-title v-text="title"></v-list-item-title>


            </v-list-item>
          </v-list-group>
        </v-list-group>
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
  name: 'DocManage',
  data(){
    return {
     Projects:[
        {name:'项目1',list:[
          {name:'Management',id:1}, {name:'account-multiple',id:2}
        ]},
        {name:'项目2',list:[
           {name:'Management',id:3},{name:'plus-outlin',id:4},{name:'fffff',id:5},{name:'tttt',id:6},
        ]}
      ],
      ProjectDocuments: [
        'Management', 'account-multiple',
        'Settings', 'cog-outline',
      ],
      otherDocuments: [
        'Create', 'plus-outline',
        'Read', 'file',
        'Update', 'update',
        'Delete', 'delete',
      ],
      }
  },
    methods: {
     
       
  }
}
</script>

<style>

</style>