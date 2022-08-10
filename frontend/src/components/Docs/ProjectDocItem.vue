<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'250px',}">
       <v-img 
      :src="imgurl"
      height="70%"
    ></v-img>
      <v-row>
        <v-col cols="12" md="7">
          
            <router-link :to="{ name: 'ViewAll', params: { id: project.url } }">
            <v-card-title>
              <h3>
             {{project.project_name}}
             </h3>
            </v-card-title>
              </router-link>
        </v-col>

        <v-col cols="12" md="5">
             <div v-show="project.list.length==0">
             <h5>无</h5></div>
             <div v-if="project.list.length<=2">
             <div  v-for="(doc,index) in project.list"    :key="index">
                <router-link :to="{ name: 'ShowDoc',params:{docid: doc.id}}">
             <h5>{{doc.document_name}}</h5>
             </router-link>
             </div>
             </div>
             <div v-else>
                <router-link :to="{ name: 'ShowDoc',params:{docid: project.list[0].id}}">
             <h5>{{project.list[0].document_name}}</h5>
             </router-link>
              <router-link :to="{ name: 'ShowDoc',params:{docid: project.list[1].id}}">
             <h5>{{project.list[1].document_name}}</h5>
             </router-link>
              <router-link :to="{ name: 'DocumentEdit', params: { id: project.url } }">
             <h5>更多</h5>
             </router-link>
             </div>
          
          </v-col>
          

 



      </v-row>

    </v-card>

   <v-dialog v-model="dialog" persistent max-width="600px">

      <v-card>
        <v-card-title >
          <span class="headline mx-auto">重命名</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
               <v-col col="12" md="12">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="项目名称"
                    required
                ></v-text-field>
              </v-col>
              <v-col col="12" md="12">
                <v-textarea
                    v-model="intro"
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
          <v-btn color="blue darken-1" text @click="update()">更改</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>

import {Project} from "@/api/project";

export default {
  name: "ProjectDocItem",
  props: ["project"],
  data() {
    return {
      dialog:false,
        name:"",
        imgurl:"",
        intro:"",
    }
  },
  methods: {
     open(){
       
        console.log(this.project.url)
    },
   
    

   
    
  },
   mounted(){
    this.i=this.project.project_id%7;
    this.imgurl=require("../../assets/design/"+this.i+".jpg");
    console.log(this.imgurl)
  }

};

</script>
<style scoped>

</style>
