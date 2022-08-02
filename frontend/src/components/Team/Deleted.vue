<template>
  <div class="deleted">
    <h1>项目回收站</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in project" :key="index">
        <proitem :project="project"></proitem>
      </v-col>
    </v-row>

  </div>
</template>
<script>

import ProjectItem from '@/components/Starting/ProjectItem.vue'
export default {
  name: 'Deleted',
  components: {
    proitem:ProjectItem
  },
  methods: {

  }
}
</script>
