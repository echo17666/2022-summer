<template>
  <div>
     
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'250px','position':'relative', 'width':'380px'}">
      
       <v-img
      :src="imgurl"
      height="70%"
    ></v-img>
  
      <v-btn  @click="open()"  icon :style="{'z-index':'100','position':'absolute','bottom':'0px','right':'0px','margin-bottom':'10px','margin-right':'10px'}" >
      <span class="material-icons-outlined" :style="{}">edit</span>
    </v-btn>
      <v-row>
        <v-col cols="12" md="10" sm="10">
           <router-link :to="{ name: 'TeamProject', params: { id: team.url } }">
            <v-card-title>
              <h3>
             {{team.team_name}}
             </h3>
            </v-card-title>
           </router-link>
          <v-card-text>
             
          </v-card-text>
            
        </v-col>
        <v-col cols="12" md="2" sm="10">
           
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
                    label="团队名称"
                    required
                ></v-text-field>
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

import {Team} from "@/api/team.js";
export default {
  name: "TeamItem",
  props: ["team"],
  data() {
    return {
        dialog:false,
        name:"",
        intro:"",
        imgurl:"",
        id:"xxx",
        i:"",
    };
  },
  methods: {
    open(){
        this.name=this.team.team_name
        this.intro=this.team.team_intro
        this.dialog=true;
    },
    update(){
        
        let formdata = new FormData()
        formdata.append('team_name',this.name)
        formdata.append('team_intro',this.intro)
        formdata.append('team_id',this.team.team_id)
        Team.updateTeam(formdata)
        .then((response) => { 
            this.$notify({
              title: '重命名成功',
              type: 'success'
            })
            this.dialog = false;
            console.log(response.data)
            this.team.team_name=this.name
            this.team.team_intro=this.intro
        })
        .catch((error) => {    
          console.log(error) 
        });
    },
    cancel(){
        this.name=this.team.team_name,
        this.intro=this.team.team_intro,
        this.dialog = false;
    },
    
  },
  mounted(){
    this.i=this.team.team_id%8;
    this.imgurl=require("../../assets/team/"+this.i+".jpg");
    console.log(this.imgurl)
  }
 

};
</script>
<style scoped>

</style>
