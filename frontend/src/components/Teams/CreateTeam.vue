<template>
  <div class="createTeam">
    <h1>创建团队</h1>
     <v-text-field
            v-model="name"
            :counter="10"
            label="团队名称"
            required
          ></v-text-field>
          <v-btn @click="createTeam()">确定</v-btn>
  </div>
</template>
<script>
import { Team } from "@/api/team.js";
export default {
  name: 'CreateTeam',
  data(){
    return{
      name:""
    }
  },
    methods: {
     createTeam(){
        let formdata = new FormData();
        formdata.append('team_name',this.name);
        Team.createTeam(formdata)
       .then((response) => { 
         
         console.log(response)
          this.$notify({
              title: '团队创建成功',
              type: 'success'
            })
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
