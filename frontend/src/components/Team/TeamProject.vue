<template>
  <div class="teamproject" style="margin-top:15px" :style="{'margin-left':'10px','margin-right':'10px'}">
    <v-row :style="{'margin-top':'10px'}">
      <v-col cols="12" md="3">
    <h1>团队项目列表</h1>
      </v-col>
    <v-col cols="12" md="1">
    <v-btn  @click="dialog=!dialog" class="mx-2" fab dark color="indigo">
      <span class="material-icons-outlined">add</span>
    </v-btn>
      </v-col>
     <v-col cols="12" md="4">
     <el-input label="搜索项目" placeholder="关键字检索"  @change="getProject()" v-model="keyword" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
     </v-col>
      <v-col cols="12" md="4">
    <el-select
        v-model="sort"
        placeholder="默认排序"
        @change="getProject();"
    >
     <el-option
      v-for="item in sorts"
      :key="item.num"
      :label="item.name"
      :value="item.num">
    </el-option>
    </el-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in projects"
             :key="index"

      >
        <proitem v-if="project.project_status!==0" :project="project"></proitem>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">新建项目</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col col="12" md="12">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="项目名称"
                    required
                ></v-text-field>
              </v-col>
              <v-col col="12" md="12">
                <v-textarea
                    v-model="description"
                    outlined
                    label="项目简介"
                    rows="4"
                    :counter="100"
                    row-height="30"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
          <v-btn color="blue darken-1" text @click="addProject()">创建</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 <v-pagination  :style="{'position':'absolute','bottom':'20px','left':'50%'}"
      v-model="page"
      :length="pageTotal"
      circle
    ></v-pagination>
    
    

  </div>

</template>
<script>
import ProjectItem from '@/components/Starting/ProjectItem.vue'
import { Project } from "@/api/project.js";
export default {
  name: 'TeamProject',
  components: {
    proitem: ProjectItem
  },
  data() {
    return {
      dialog: false,
      page:1,
      pageTotal:0,
      name: "",
      description: "",
      keyword:"",
      // sorts:["按时间升序","按名称升序","按名称降序","按时间降序"],
      sorts:[
        {value:"选项2",name:"默认排序",num:0},
        {value:"选项1",name:"按时间升序",num:1},

        {value:"选项3",name:"按名称升序",num:2},
        {value:"选项4",name:"按名称降序",num:3},
        ],
      sort:"",
      type:"",
      projects: [],
      templateProjects:[]
    }
  },

  methods: {
    getProject() {
      let id=this.$route.params.id
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData();
      formdata.append("team_id",team_id)
      formdata.append("sort",this.sort)
      formdata.append("keyword", this.keyword)
      Project.ShowProject(formdata)
          .then((response) => {
            this.projects = response.data.Teams;
            console.log(response.data)

            this.templateProjects = [];
							if(this.projects.length-6*(this.page-1)<6) {
                  for(let i = 0; i < this.projects.length-6*(this.page-1); i++){
                    this.templateProjects.push(response.data.Teams[i+6*(this.page-1)]);
                    console.log(this.templateProjects,"xxx")
                  }
              }
              else{
                for(let i = 0; i < 6; i++){
                    this.templateProjects.push(response.data.Teams[i+6*(this.page-1)]);
                    console.log(this.templateProjects,"xxx")
                  }
						}
						this.pageTotal = Math.ceil(this.projects.length /6);
						if(this.pageTotal===0) this.pageTotal = 1;



          var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var a = key.split("");
          for(let i=0;i<this.projects.length;i++){
            let s="";
            for(let j=0;j<id.length;j++){
              let b = id.charCodeAt(j);
              s+=a[b%36];
            }

            s+="JQ"
            s+=this.projects[i].id;
            this.projects[i]["url"]=s;
          }
          console.log(this.projects)
          })
          .catch((error) => {
            console.log(error)
          });
      // this.keyword="";

    },
    cancel() {
      this.name = "";
      this.description = "";
      this.dialog = false;
    },
    addProject() {

      let id = this.$route.params.id;
      let s = id.split('ZY');
      let team_id = s[1];
      let formdata = new FormData();
      formdata.append("team_id", team_id)
      formdata.append("project_name", this.name)
      formdata.append("project_description", this.description)

      Project.AddProject(formdata)
          .then((response) => {
            console.log(response.data)
            this.$notify({
              title: '添加项目成功',
              type: 'success'
            })
            })
          .catch((error) => {
            console.log(error)
          });
      // this.name = "";
      // this.introduction = "";
      this.getProject();
      this.dialog = false;
      this.name="";
      this.description="";
      this.getProject();
    },
  },
    watch:{
   page(newPage,oldPage){
      this.getTeams();
    }
  },
  mounted() {
    this.getProject();
  },
  // updated() {
  //   this.getProject();
  // }
}
</script>
