  <template>
  <div class="team">
    <div class="row">
      <v-col cols="12" md="2" :style="{'padding-right':'0px'}">
     <v-navigation-drawer
      permanent
      height="100vh"
    >


      <v-list dense>
    <v-list-item
        @click="$router.push('/teams/allteams')"
        >
        <v-list-item-icon>
            <span class="material-icons-outlined">
              arrow_back</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>返回</v-list-item-title>
          </v-list-item-content></v-list-item>
         <v-list-item
           @click="$router.push({name:'TeamProject'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                format_list_bulleted</span>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title>团队项目列表</v-list-item-title>
          </v-list-item-content>
        </v-list-item>



        <v-list-item
            @click="$router.push({name:'Deleted'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                delete</span>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title>项目回收站</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item
        @click="$router.push({name:'MemberList'})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                person</span>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title>人员列表</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

   <v-list-item
        @click="$router.push({name:'AllDocs',params:{id:$route.params.id}})"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                folder</span>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title>文档中心</v-list-item-title>
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
