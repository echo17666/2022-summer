<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="10" sm="10">
            <router-link :to="{ name: 'Design', params: { id: design.url } }">
            <v-card-title>
              <h1>
             {{design.design_name}}
             </h1>
            </v-card-title>
            </router-link>
         
          <v-spacer></v-spacer>
     
           
       
          <v-card-actions>
                
          </v-card-actions>
            
        </v-col>
        <v-col cols="12" md="2" sm="10">
             <!-- <v-btn  @click="open()"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">edit</span>
    </v-btn> -->
        </v-col>
        <v-col cols="12" md="12" sm="2">
            <v-card-text>
             大小:{{design.design_a}}x{{design.design_b}}
          </v-card-text>
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
          <!-- <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
          <v-btn color="blue darken-1" text @click="update()">更改</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>

import {Design} from "@/api/design.js";
export default {
  name: "DesignItem",
  props: ["design"],
  data() {
    return {
        dialog:false,
        name:"",
        intro:"",
        id:"xxx",
    };
  },
  methods: {
    // open(){
    //     this.name=this.team.team_name
    //     this.intro=this.team.team_intro
    //     this.dialog=true;
    // },
    // update(){
        
    //     let formdata = new FormData()
    //     formdata.append('team_name',this.name)
    //     formdata.append('team_intro',this.intro)
    //     formdata.append('team_id',this.team.team_id)
    //     Team.updateTeam(formdata)
    //     .then((response) => { 
    //         this.$notify({
    //           title: '重命名成功',
    //           type: 'success'
    //         })
    //         this.dialog = false;
    //         console.log(response.data)
    //         this.team.team_name=this.name
    //         this.team.team_intro=this.intro
    //     })
    //     .catch((error) => {    
    //       console.log(error) 
    //     });
    // },
    // cancel(){
    //     this.name=this.team.team_name,
    //     this.intro=this.team.team_intro,
    //     this.dialog = false;
    // },
    
  },
 

};
</script>
<style scoped>

</style>
