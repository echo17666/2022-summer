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
      if(this.project.project_status===0)
        this.project.project_status = 1;
    },
    Completed()
    {
      if(this.project.project_status===1)
        this.project.project_status = 2;
    },
    Delete()
    {
      if(this.project.project_status!==0)
        this.project.project_status = 0;
    }
  },

};

</script>
<style scoped>

</style>
