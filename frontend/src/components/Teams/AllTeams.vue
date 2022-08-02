<template>
  <div class="allteams">
    <h1>所有团队列表</h1>
    <v-btn @click="$router.push({name:'TeamProject'})"> 某个团队 </v-btn>
  </div>
</template>
<script>
import { Team } from "@/api/team.js";
export default {
  name: 'AllTeams',
  data(){
    return{
      teams:[]
    }
  },
    methods: {
      getTeams(){
         Team.showTeam()
        .then((response) => { 
          this.teams = response.data.Teams;
          console.log(this.teams)
        })  
      
        .catch((error) => {    
          console.log(error) 
        });
    },
     

  },
  mounted(){
    this.getTeams();
  }
}
</script>
