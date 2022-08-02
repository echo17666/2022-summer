<template>
  <div class="memberlist">
    <h1>人员列表</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in project" :key="index">
        <proitem :project="project"></proitem>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
    </v-dialog>

    <v-btn  @click="dialog=!dialog" class="mx-2" fab dark color="indigo">
      <span class="material-icons-outlined">add</span>
    </v-btn>


  </div>
</template>
<script>
import ProjectItem from '@/components/Starting/ProjectItem.vue'
export default {
  name: 'MemberList',
  components: {
    proitem:ProjectItem
  },
  data(){
    return{
      dialog: false,
      newProject:{
        name:"",
        introduction:"",
        profile:"",
      },
      project:[
        {name:"aaa",introduction:"yyds",profile:".../assets/logo.png"},
        {name:"bbb",introduction:"hello",profile:".../assets/logo.png"},
        {name:"ccc",introduction:"hi",profile:".../assets/logo.png"},
      ]

    }
  },
  methods: {
    addProject(){
      const newpro={name:this.newProject.name,introduction:this.newProject.introduction,profile: this.newProject.profile};
      this.project.push(newpro);
      console.log(this.project)


      this.$notify({
        title: '人员添加成功',
        type: 'success'
      })
      this.newProject.name='';
      this.newProject.introduction="";
      this.newProject.profile="";
      this.dialog = false;
    },
    cancel(){

      this.newProject.name='';
      this.newProject.introduction="";
      this.newProject.profile="";
      this.dialog=false;

    }

  }
}
</script>
