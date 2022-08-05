<template>
  <div class="viewall" style="margin-top:10px">
    <span>
      <h1>所有原型 
      <v-btn  @click="dialog=true" class="mx-2" fab dark color="indigo">
      <span class="material-icons-outlined">add</span>
      </v-btn>
      
     </h1></span>
    <v-row style="margin-top:10px">
    <v-col cols="12" md="4" v-for="(design,index) in designs" :key="index">
        <DesignItem :design="design"></DesignItem>
      </v-col>
      </v-row>



      <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline mx-auto">创建原型</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col col="12" md="12">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="原型名称"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
          <v-btn color="blue darken-1" text @click="addDesign()">创建</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>
<script>
import { Design } from "@/api/design.js";
import DesignItem from "./DesignItem.vue"
export default {
  name: 'ViewAll',
   components: {
      DesignItem
  },
  data(){
    return{
      designs:[],
      dialog:false,
      name:""
    }
  },
    methods: {
      getDesigns(){
        let id=this.$route.params.id
        let s=id.split('JQ')
        let project_id=s[1]
        let formdata=new FormData()
        formdata.append('project_id',project_id);
         Design.AllDesign(formdata)
        .then((response) => {
          this.designs= response.data.designs;
          
          var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var a = key.split("");
          for(let i=0;i<this.designs.length;i++){
            let s="";
            for(let j=0;j<id.length;j++){
              let b = id.charCodeAt(j);
              s+=a[b%36];
            }

            s+="DS"
            s+=this.designs[i].id;
            this.designs[i]["url"]=s;
          }


          console.log(this.designs)
        })

        .catch((error) => {
          console.log(error)
        });
    },
    cancel(){
      this.name=""
      this.dialog=false;
    },
    addDesign(){
      let id=this.$route.params.id
      let s=id.split('JQ');
      let project_id=s[1];
      let formdata = new FormData();
      formdata.append("project_id",project_id)
      formdata.append("design_name",this.name)
      formdata.append("design_a","0")
      formdata.append("design_b","0")
      Design.CreateDesign(formdata)
       .then((response) => {
          let design_id=response.data.design_id
          var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var a = key.split("");
            let s="";
            for(let j=0;j<id.length;j++){
              let b = id.charCodeAt(j);
              s+=a[b%36];
            }
            s+="DS"
           s+=design_id;

           this.$notify({
          title: '创建成功',
          type: 'success'
        })
        this.$router.push({name:'Design',params: { id: s }})
        })
        .catch((error) => {
          console.log(error)
        });
    },


  },
  mounted(){
    this.getDesigns();
  }
}
</script>
