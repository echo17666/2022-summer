<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'250px','position':'relative', 'width':'380px'}">
     
           <v-img
      :src="imgurl"
      height="65%"
    ></v-img>
    <div :style="{'z-index':'100','position':'absolute','bottom':'0px','right':'0px','margin-bottom':'10px','margin-right':'10px'}">
       <v-btn  @click="open()"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">edit</span>
    </v-btn>

    <v-btn icon :style="{'margin-top':'10px'}"

                @click="Completed"
                v-if="project.project_status===1"
            >
                <span class="material-icons-outlined">done</span>
            </v-btn>

    <v-btn icon :style="{'margin-top':'10px'}"

                @click="Delete"
                v-if="project.project_status!==0"
            >
                <span class="material-icons-outlined">delete</span>
            </v-btn>

    <v-btn icon :style="{'margin-top':'10px'}"

                @click="Restore"
                v-if="project.project_status===0"
            >
                <span class="material-icons-outlined">restore</span>
            </v-btn>
    <v-btn icon :style="{'margin-top':'10px'}"

           @click="copy"
           v-if="project.project_status!==0"
    >
      <span class="material-icons-outlined">copy</span>
    </v-btn>
    </div>


          <v-row>
            <v-col cols="12" md="12" sm="3">
            <router-link :to="{ name: 'ViewAll', params: { id: project.url } }">
            <v-card-title>
              <h3>
             {{project.project_name}}
             </h3>
             
            </v-card-title>
              </router-link>
              <div :style="{'z-index':'100','position':'absolute','bottom':'0px','left':'0px','margin-bottom':'0px','margin-right':'10px'}">
              <v-card-text v-if="project.project_status===2">
              <h3>
            项目已完成
              </h3>
          </v-card-text>
          <v-card-text v-else-if="project.project_status===1">
              <h3>
            项目进行中
              </h3>
          </v-card-text>
              </div>
              </v-col>

        <v-col cols="12" md="12" sm="9">
          
          </v-col>
      
  <v-col cols="12" md="2">
            



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
        imgurl:'',
    }
  },
  methods: {
     open(){
        this.name=this.project.project_name
        this.intro=this.project.project_description
        this.dialog=true;
    },
    update(){
        this.$parent.getProject();
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
      this.$parent.getProject();
      let formdata = new FormData();
      formdata.append("project_id",this.project.id);

      Project.reviveproject(formdata)
          .then((response) => {
            this.$parent.getProject();
            console.log(response.data)
            this.$notify({
              title: '恢复成功',
              type: 'success'
            })
            this.$parent.getProject();
          })
          .catch((error) => {
            console.log(error)
          });
      this.$parent.getProject();
    },
    Completed()
    {
      this.$parent.getProject();
      let formdata = new FormData();
      formdata.append("project_id",this.project.id);

      Project.finishProject(formdata)
          .then((response) => {
            this.$parent.getProject();
            console.log(response.data)
            this.$notify({
              title: '项目已完成',
              type: 'success'
            })
            this.$parent.getProject();
          })
          .catch((error) => {
            console.log(error)
          });
      this.$parent.getProject();
    },
    Delete()
    {
      this.$parent.getProject();
      let formdata = new FormData();
      formdata.append("project_id",this.project.id);

      Project.deleteProject(formdata)
          .then((response) => {
            this.$parent.getProject();
            console.log(response.data)
            this.$notify({
              title: '删除成功',
              type: 'success'
            })
            this.$parent.getProject();
          })

          .catch((error) => {
            console.log(error)
          });
      this.$parent.getProject();
    },
    copy()
    {
      this.$parent.getProject();
      let formdata = new FormData();
      formdata.append("project_id",this.project.id);

      Project.copyProject(formdata)
          .then((response) => {
            this.$parent.getProject();
            console.log(response.data)
            this.$notify({
              title: '复制成功',
              type: 'success'
            })
            this.$parent.getProject();
          })

          .catch((error) => {
            console.log(error)
          });
      this.$parent.getProject();
    }
  },
   mounted(){
    this.i=this.project.project_name%7;
    this.imgurl=require("../../assets/project/"+this.i+".jpg");
    console.log(this.imgurl)
  }

};

</script>
<style scoped>

</style>
