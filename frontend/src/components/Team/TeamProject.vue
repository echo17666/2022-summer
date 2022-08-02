<template>
  <div class="teamproject" :style="{'margin-left':'10px','margin-right':'10px'}">
    <h1>团队项目列表</h1>  <v-btn  @click="dialog=!dialog" class="mx-2" fab dark color="indigo">
    <span class="material-icons-outlined">add</span>
  </v-btn>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in project" :key="index">
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
                    v-model="newProject.name"
                    :counter="10"
                    label="项目名称"
                    required
                ></v-text-field>
              </v-col>
              <v-col col="12" md="12">
                <v-textarea
                    v-model="newProject.introduction"
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


  </div>

</template>
<script>
import ProjectItem from '@/components/Starting/ProjectItem.vue'
export default {
  name: 'TeamProject',
  components: {
    proitem:ProjectItem
  },
  data(){
    return{
      dialog: false,
      newProject:{
        name:"",
        introduction:"",
      },
      project:[
        {name:"aaa",introduction:"yyds"},
        {name:"bbb",introduction:"hello"},
        {name:"ccc",introduction:"hi"},
      ]
    }
  },
  methods: {
    addProject(){
      const newpro={name:this.newProject.name,introduction:this.newProject.introduction};
      this.project.push(newpro);
      console.log(this.project)
      this.$notify({
        title: '项目创建成功',
        type: 'success'
      })
      this.newProject.name='';
      this.newProject.introduction="",
          this.dialog = false;
    },
    cancel(){

      this.newProject.name='';
      this.newProject.introduction="";

      this.dialog=false;

    }

  }
}
</script>
