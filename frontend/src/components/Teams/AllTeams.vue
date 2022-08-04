<template>
  <div class="allteams">
    <h1>所有团队列表</h1>
    <v-row>
    <v-col cols="12" md="4" v-for="(team,index) in teams" :key="index">
        <team :team="team"></team>
      </v-col>
      </v-row>
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
          var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var a = key.split("");
          for(let i=0;i<this.teams.length;i++){
            let s="";
            for(let j=0;j<this.teams[i].creator_username.length;j++){
              let b = this.teams[i].creator_username.charCodeAt(j);
              s+=a[b%36];
            }
            s+="ZY"
            s+=this.teams[i].team_id;
            this.teams[i]["url"]=s;
          }
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
