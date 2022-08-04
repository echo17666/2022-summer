<template>
  <div class="teamproject" :style="{'margin-left':'10px','margin-right':'10px'}">
    <h1>团队项目列表</h1>
    <div style="height: 10px"></div>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in projects"
             :key="index"
             v-if="project.project_status!==0"
             style="background-color: lightblue;"
      >
        <proitem :project="project"></proitem>
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

    <div style="height: 20px"></div>
    <v-btn  @click="dialog=!dialog" class="mx-2" fab dark color="indigo">
      <span class="material-icons-outlined">add</span>
    </v-btn>

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
      name: "",
      description: "",
      projects: []
    }
  },
  methods: {
    getProject() {
      let id=this.$route.params.id

      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData();
      formdata.append("team_id",team_id)

      Project.ShowProject(formdata)
          .then((response) => {
            this.projects = response.data.projects
          })
          .catch((error) => {
            console.log(error)
          });
    },
    cancel() {
      this.name = "";
      this.introduction = "";
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
      this.dialog = false;
    },
  },
  mounted() {
    this.getProject();
  }
}
</script>
