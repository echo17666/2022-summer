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
                  :value="true"
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
                  <v-list-item-title v-text="title.project_name"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                  v-for="(title,i) in title.list"
                  :key="i"
                  link
                  style="padding-left: 40px"
                  @click="$router.push({name:'ShowDoc',params:{docid:title.id}})"
              >
                <v-list-item-title v-text="title.document_name"></v-list-item-title>
                {{title.id}}
              </v-list-item>

            </v-list-group>
          </v-list-group>

          <v-list-group
              no-action
              sub-group
              prepend-icon="folder_open"
              style="margin-left: 6px"
              v-for="(title, i) in folder"
              :key="i"
              @click="getDocument()"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="title.folder_name"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="(title, i) in title.list"
                :key="i"
                link
                style="padding-left: 46px"
                @click="$router.push({name:'ShowDoc',params:{docid:title.id}})"
            >
              <v-list-item-title v-text="title.document_name"></v-list-item-title>
            </v-list-item>
            <v-btn  @click="openFolder(title.folder_id)" style="margin-left: 40px" bottom>
              添加文档
              <v-icon>add</v-icon>
            </v-btn>
          </v-list-group>
                <v-spacer></v-spacer>
            <v-btn  @click="dialog=!dialog" style="margin-left: 26px" bottom>
                  添加文件夹
                  <v-icon>add</v-icon>
                </v-btn>
        </v-list-group>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline mx-auto">添加文件夹</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col col="12" md="12">
                    <v-text-field
                        v-model="FolderName"
                        label="文件夹名称"
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>

              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
              <v-btn color="blue darken-1" text @click="addFolder()">添加</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog1" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline mx-auto">添加文档</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col col="12" md="12" sm="2">
                    <v-text-field
                        v-model="DocumentName"
                        label="文档名称"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col col="12" md="12" sm="10">
                    <v-row>
                    

                      <el-radio-group v-model="model">

                        <el-radio-button  v-model="model" label="0" border>
                          
                          <v-row>
                            <v-col cols="12" md="12" sm="11">
                          <span class="material-icons-outlined" :style="{'font-size':'50px'}">
                              article
                          </span>
                            </v-col>
                              <v-col cols="12" md="12" sm="1">
                                空白文档
                              </v-col>
                          </v-row>
                          
                        </el-radio-button >
       <el-radio-button  v-model="model" label="1" border>
                          
                          <v-row>
                            <v-col cols="12" md="12" sm="11">
                          <span class="material-icons-outlined" :style="{'font-size':'50px'}">
                              article
                          </span>
                            </v-col>
                              <v-col cols="12" md="12" sm="1">
                                项目计划
                              </v-col>
                          </v-row>
                          
                        </el-radio-button >
      <el-radio-button v-model="model" label="2" border>
                        <v-row>
                            <v-col cols="12" md="12" sm="11">
                          <span class="material-icons-outlined" :style="{'font-size':'50px'}">
                              article
                          </span>
                            </v-col>
                              <v-col cols="12" md="12" sm="1">
                                会议纪要
                              </v-col>
                          </v-row>
                          
                       </el-radio-button >
       <el-radio-button  v-model="model" label="3" border>
                          <v-row>
                            <v-col cols="12" md="12" sm="11">
                          <span class="material-icons-outlined" :style="{'font-size':'50px'}">
                              article
                          </span>
                            </v-col>
                              <v-col cols="12" md="12" sm="1">
                                工作周报
                              </v-col>
                          </v-row>
                          
                       </el-radio-button >
      <el-radio-button v-model="model" label="4" border>
                         
                          <v-row>
                            <v-col cols="12" md="12" sm="11">
                          <span class="material-icons-outlined" :style="{'font-size':'50px'}">
                              article
                          </span>
                            </v-col>
                              <v-col cols="12" md="12" sm="1">
                                需求文档
                              </v-col>
                          </v-row>
                    
                        </el-radio-button>
                      </el-radio-group>
                    </v-row>
                  </v-col>
                </v-row>

              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
              <v-btn color="blue darken-1" text @click="addDocument()">添加</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
import {document} from '@/api/document.js'
import {Member} from "@/api/member";
export default {
  name: 'DocManage',
  data(){
    return {
     Projects: [],
      model:0,
      folder:[],
      FolderName:"",
      DocumentName:"",
      dialog: false,
      dialog1:false,
      folder_id:0
    }
  },
    methods: {
     getContext(){
      let id = this.$route.params.id
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData()
      formdata.append('team_id',team_id)
      document.getAllDocs(formdata).then(res=>{
        this.Projects = res.data.documents
      })
     },
      openFolder(id){
       this.dialog1=true;
       this.folder_id=id;
      },
      cancel(){
        this.FolderName="";
        this.DocumentName="";
        this.dialog=false;
        this.dialog1=false;
        this.folder_id=0;
      },
      addFolder(){
        let id=this.$route.params.id
        let s=id.split('ZY');
        let team_id=s[1];
        let formdata = new FormData();
        formdata.append("team_id",team_id)
        formdata.append("folder_name",this.FolderName)

        document.createfolder(formdata)
            .then((response) => {
              console.log(response.data)
              this.getDocument();
              this.$notify({
                title: '添加文件夹成功',
                type: 'success'
              })
              this.FolderName="";
              this.DocumentName="";
              this.dialog1=false;
              this.dialog=false;
              this.folder_id=0;
              this.getDocument();
            })
            .catch((error) => {
              console.log(error)
            });
      },
      getDocument(){
        let id=this.$route.params.id
        let s=id.split('ZY');
        let team_id=s[1];
        let formdata = new FormData();
        formdata.append("team_id",team_id)

       document.folderdocument(formdata)
           .then((res) => {
             this.folder=res.data.documents
           })
           .catch((error) => {
             console.log(error)
           });
      },
      addDocument(){
        let formdata = new FormData();
        formdata.append("document_name",this.DocumentName)
        formdata.append("project_id",0)
        formdata.append("model_id",this.model)
        formdata.append("folder_id",this.folder_id)

        document.createdocument(formdata)
            .then((response) => {
              console.log(response.data)
              this.getDocument();
              this.$notify({
                title: '添加文档成功',
                type: 'success'
              })
              console.log(this.dialog)
              this.dialog=false;
              this.dialog1=false;
              this.DocumentName=""
              this.getDocument();
            })
            .catch((error) => {
              console.log(error)
            });
      }
  },
  mounted(){
    this.getContext();
    this.getDocument();
  }
}
</script>

<style scoped>
.el-radio-button {
  margin-left:20px;
   margin-right:20px;
   margin-top:20px;
   margin-bottom:20px;
  width:140px;
  height:100px;
}
</style>
