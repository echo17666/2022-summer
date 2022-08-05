<template>
  <div class="createTeam" style="margin-top:15px">
    <h1>创建团队</h1>
    <v-container>
     <v-text-field
            outlined
            v-model="name"
            :counter="10"
            label="团队名称"
            required
          ></v-text-field>

          <v-textarea
            outlined
            v-model="intro"
            :counter="100"
            label="团队简介"
            required
          ></v-textarea>
          <v-btn @click="createTeam()">确定</v-btn>
    </v-container
    >
  </div>
</template>
<script>
import { Team } from "@/api/team.js";
export default {
  name: 'CreateTeam',
  data(){
    return{
      name:"",
      intro:""
    }
  },
    methods: {
     createTeam(){
        let formdata = new FormData();
        formdata.append('team_name',this.name);
        formdata.append('team_intro',this.intro);
        Team.createTeam(formdata)
       .then((response) => { 
         
         console.log(response)
          this.$notify({
              title: '团队创建成功',
              type: 'success'
            })
            this.$router.push('/teams/allteams')
       })  

     
       .catch((error) => {    
         console.log(error.response) 
       });
     },
     },
     

  
  mounted(){

  }
}
</script>
