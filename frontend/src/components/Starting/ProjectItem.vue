<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="10" sm="1">
            <router-link :to="{ name: 'ViewAll', params: { id: project.url } }">
            <v-card-title>
              <h1>
             {{project.project_name}}
             </h1>
            </v-card-title>
              </router-link>
              </v-col>
              <v-col cols="12" md="2" sm="2">
             <v-btn  @click="open()"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">edit</span>
    </v-btn>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-card-text>
             {{project.project_description}}
          </v-card-text>
          <v-card-text v-if="project.project_status===2">
            项目已完成
          </v-card-text>
          <v-card-text v-else-if="project.project_status===1">
            项目进行中
          </v-card-text>
          </v-col>
<v-col cols="12" md="6" sm="3">
          <v-card-actions class="d-flex justify-end">
            <v-row>

            <v-btn
                class="ma-2"
                color="secondary"
                @click="Completed"
                v-if="project.project_status===1"
            >
              完成项目
            </v-btn>

   <v-btn
                class="ma-2"
                color="secondary"
                @click="Delete"
                v-if="project.project_status!==0"
            >
              删除项目
            </v-btn>

            <v-btn
                class="ma-2"
                color="secondary"
                @click="Restore"
                v-if="project.project_status===0"
            >
              恢复
            </v-btn>

            </v-row>
          </v-card-actions>
</v-col>




      </v-row>

    </v-card>

   <v-dialog v-model="dialog" persistent max-width="600px">

      <v-card>
        <v-card-title >
          <span class="headline mx-auto">重命名</span>
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
                    v-model="intro"
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
          <v-btn color="blue darken-1" text @click="update()">更改</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>

import {Project} from "@/api/project";

export default {
  name: "ProjectItem",
  props: ["project"],
  data() {
    return {
      dialog:false,
        name:"",
        intro:"",
    }
  },
  methods: {
     open(){
        this.name=this.project.project_name
        this.intro=this.project.project_description
        this.dialog=true;
    },
    update(){

        let formdata = new FormData()
        formdata.append('project_name',this.name)
        formdata.append('project_description',this.intro)
        formdata.append('project_id',this.project.id)
        Project.UpdateProject(formdata)
        .then((response) => {
            this.$notify({
              title: '重命名成功',
              type: 'success'
            })
            this.dialog = false;
            console.log(response.data)
             this.project.project_name=this.name
            this.project.project_description=this.intro

        })
        .catch((error) => {
          console.log(error)
        });
    },
    cancel(){
       this.name=this.project.project_name
        this.intro=this.project.project_description
        this.dialog=false;
    },
    Restore()
    {
      let formdata = new FormData();
      formdata.append("project_id",this.project.id);

      Project.reviveproject(formdata)
          .then((response) => {
            console.log(response.data)
            this.$notify({
              title: '恢复成功',
              type: 'success'
            })
          })
          .catch((error) => {
            console.log(error)
          });
      this.$parent.getProject();
      // this.$router.go(0);
    },
    Completed()
    {
      // if(this.project.status===1)
      //   this.project.status=2;
      let formdata = new FormData();
      formdata.append("project_id",this.project.id);

      Project.finishProject(formdata)
          .then((response) => {
            console.log(response.data)
            this.$notify({
              title: '项目已完成',
              type: 'success'
            })
          })
          .catch((error) => {
            console.log(error)
          });
      // this.$router.go(0);
      this.$parent.getProject();
    },
    Delete()
    {
      // if(this.project.status!==0)
      //   this.project.status=0;
      let formdata = new FormData();
      formdata.append("project_id",this.project.id);

      Project.deleteProject(formdata)
          .then((response) => {
            console.log(response.data)
            this.$notify({
              title: '删除成功',
              type: 'success'
            })
          })
          .catch((error) => {
            console.log(error)
          });
      // this.$router.go(0);
      this.$parent.getProject();
    }
  },

};

</script>
<style scoped>

</style>
