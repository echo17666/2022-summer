<template>
  <div class="allteams">
    <h1>所有团队列表</h1>
    <v-row>
    <v-col cols="12" md="4" v-for="(team,index) in teams" :key="index">
        <team :team="team"></team>
      </v-col>
      </v-row>
       <v-btn @click="$router.push({name:'TeamProject'})"> 某个团队 </v-btn>
  </div>
</template>
<script>
import { Team } from "@/api/team.js";
import TeamItem from "../Starting/TeamItem.vue"
export default {
  name: 'AllTeams',
   components: {
    team:TeamItem
  },
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
