<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="7">
            <v-card-title>
              <h1>
             {{project.name}}
             </h1>
            </v-card-title>
          <v-card-text>
             {{project.introduction}}
          </v-card-text>
          <v-card-text v-if="project.completed===true">
            项目已完成
          </v-card-text>
          <v-card-text v-else>
            项目进行中
          </v-card-text>
          <v-card-actions>
            <v-btn
                class="ma-2"
                color="secondary"
                @click="Completed"
            >
              完成项目
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                class="ma-3"
                color="secondary"
                @click="Restore"
                v-show="this.project.deleted===true"
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
      if(this.project.deleted===true)
        this.project.deleted =! this.project.deleted;
    },
    Completed()
    {
      if(this.project.completed===false)
      this.project.completed =! this.project.completed;
    }
  },
};
</script>
<style scoped>

</style>
