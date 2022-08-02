<template>
  <div class="deleted">
    <h1>项目回收站</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in project"
             :key="index"
             v-if="project.deleted===true"
              >
        <proitem :project="project" ></proitem>
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
  data(){
    return{
    project:[
      {name:"aaa",introduction:"yyds",completed:false, deleted:true},
      {name:"bbb",introduction:"hello",completed:true, deleted:true},
      {name:"ccc",introduction:"hi",completed:false, deleted:true},
    ]
  }
  },


  methods: {


  }
}
</script>
