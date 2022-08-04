<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="7">
            <router-link :to="{ name: 'ProjectManage', params: { id: project.url } }">
            <v-card-title>
              <h1>
             {{project.project_name}}
             </h1>
            </v-card-title>
              </router-link>
          <v-card-text>
             {{project.project_description}}
          </v-card-text>
          <v-card-text v-if="project.project_status===2">
            项目已完成
          </v-card-text>
          <v-card-text v-else-if="project.project_status===1">
            项目进行中
          </v-card-text>
          <v-card-actions>
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
              删除
            </v-btn>

            <v-btn
                class="ma-2"
                color="secondary"
                @click="Restore"
                v-if="project.project_status===0"
            >
              恢复
            </v-btn>

          </v-card-actions>

        </v-col>


      </v-row>

    </v-card>

  </div>
</template>

<script>

import {Project} from "@/api/project";
export default {
  name: "ProjectItem",
  props: ["project"],
  data() {
    return {

    }
  },
  methods: {
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
    },
    Completed()
    {
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
    },
    Delete()
    {
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
    }
  },

};

</script>
<style scoped>

</style>
