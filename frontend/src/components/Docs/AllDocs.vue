<template>
  <div class="Alldocs" :style="{'background-color':'#EEEEEE' ,height:'100%'}">
    <v-row>
      <v-col cols="12" md="12">
      <h1>项目文档区</h1>
      </v-col>
      <v-col cols="12" md="4" v-for="(project,index) in Projects"    :key="index"
      >
        <ProjectDoc  :project="project"></ProjectDoc>
      </v-col>
      <br/>
      <v-col cols="12" md="12" v-for="(folder,index) in folder" :key="index">
        <v-row>
      <v-col cols="12" md="12">
        <h1>{{folder.folder_name}}</h1>
      </v-col>
       <v-col cols="12" md="4" v-for="(project,index) in folder.list"    :key="index"
      >
        <Doc  :project="project"></Doc>
      </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import {document} from '@/api/document.js'
import ProjectDoc from "./ProjectDocItem.vue"
import Doc from "./DocItem.vue"
export default {
  name: 'AllDocs',
  components:{
      ProjectDoc,Doc
  },
  data(){
    return{
      Projects: [],
      folder:[],
      timer: 0,
    }
  },
  methods: {
     getContext(){
      let id = this.$route.params.id
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData()
      formdata.append('team_id',team_id)
      document.getAllDocs(formdata).then(res=>{
        this.Projects = res.data.documents
        var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var a = key.split("");
          for(let i=0;i<this.Projects.length;i++){
            let s="";
            for(let j=0;j<id.length;j++){
              let b = id.charCodeAt(j);
              s+=a[b%36];
            }

            s+="JQ"
            s+=this.Projects[i].project_id;
            this.Projects[i]["url"]=s;
          }
        console.log(this.Projects)
      })
     },
      
     
      getDocument(){
        let id=this.$route.params.id
        let s=id.split('ZY');
        let team_id=s[1];
        let formdata = new FormData();
        formdata.append("team_id",team_id)

       document.folderdocument(formdata)
           .then((res) => {
             this.folder=res.data.documents
             console.log(this.folder)
           })
           .catch((error) => {
             console.log(error)
           });
      },
      addDocument(){
       this.documents.push(this.DocumentName);
      }
  },
  mounted(){
    this.getContext();
    this.getDocument();
  },
  watch:{
    folder: {
      handler() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          
            this.getDocument()
          
        }, 2000);
      },
      immediate: true
    }
  }
 
  
}
</script>