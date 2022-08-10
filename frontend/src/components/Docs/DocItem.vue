<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'250px'}">
      <v-img 
      :src="imgurl"
      height="70%"
    ></v-img>
      <v-row>
        <v-col cols="12" md="10">
          <v-row>
            <v-col cols="12" md="12" sm="3">
            <router-link :to="{ name: 'ShowDoc', params: { docid:project.document_id } }">
            <v-card-title>
              <h2>
             {{project.document_name}}
             </h2>
            </v-card-title>
              </router-link>
              </v-col>

    
          </v-row>
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
  name: "DocItem",
  props: ["project"],
  data() {
    return {
      dialog:false,
        name:"",
        intro:"",
        imgurl:'',
    }
  },
  methods: {
     open(){
       
        console.log(this.project.url)
    },
   
    

   
    
  },
  mounted(){
    this.i=this.project.id%9;
    this.imgurl=require("../../assets/document/"+this.i+".jpg");
    console.log(this.imgurl)
  }

};

</script>
<style scoped>

</style>
