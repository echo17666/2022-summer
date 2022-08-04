<template>
  <div class="deleted">
    <h1>项目回收站</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in projects"
             :key="index"
             v-if="project.project_status===0"
              >
        <proitem :project="project" v-if="project.project_status===0"></proitem>
      </v-col>
    </v-row>

  </div>
</template>
<script>

import ProjectItem from '@/components/Starting/ProjectItem.vue'
import {Project} from "@/api/project";

export default {
  name: 'Deleted',
  components: {
    proitem:ProjectItem
  },
  data(){
    return{
      projects: [],
      dialog:false
  }
  },


  methods: {
    getProject() {
      let id = this.$route.params.id

      let s = id.split('ZY');
      let team_id = s[1];
      let formdata = new FormData();
      formdata.append("team_id", team_id)

      Project.ShowRubbish(formdata)
          .then((response) => {
            this.projects = response.data.Teams;
          })
          .catch((error) => {
            console.log(error)
          });
    },
  },
  mounted() {
    this.getProject();
  }
}
</script>
