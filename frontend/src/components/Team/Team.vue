  <template>
  <div class="team">
    <div class="row">
      <v-col cols="12" md="2" :style="{'padding-right':'0px'}">
     <v-navigation-drawer
      permanent
      height="100vh"
    >


      <v-list dense>
        <v-card
            class="mx-auto"
            width="300"
        >
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

        <v-list-group
            prepend-icon="folder"
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

            <v-list-item
                v-for="(title,i) in ProjectDocuments"
                :key="i"
                link
                style="padding-left: 40px"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

            </v-list-item>
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
                style="padding-left: 40px"
            >
              <v-list-item-title v-text="title"></v-list-item-title>


            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-divider/>
      </v-card>
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
