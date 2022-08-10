<template >
  <div class="allteams" style="margin-top:15px" >
    <h1>所有团队</h1>
    <v-row style="margin-top:10px">
    <v-col cols="12" md="4" v-for="(team,index) in templateTeams" :key="index">
        <team :team="team"></team>
      </v-col>
      </v-row>
       <div class="text-center">
      
       <div>
    <v-pagination  :style="{'position':'absolute','bottom':'20px','left':'50%'}"
      v-model="page"
      :length="pageTotal"
      circle
    ></v-pagination>
       </div>
       
  </div>
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
      teams:[],
      templateTeams:[],
      page:1,
      pageTotal:0,
    }
  },
    methods: {
      getTeams(){
         Team.showTeam()
        .then((response) => {
          this.teams = response.data.Teams;
          this.templateTeams = [];
							if(this.teams.length-6*(this.page-1)<6) {
                  for(let i = 0; i < this.teams.length-6*(this.page-1); i++){
                    this.templateTeams.push(response.data.Teams[i+6*(this.page-1)]);
                    console.log(this.templateTeams,"xxx")
                  }
              }
              else{
                for(let i = 0; i < 6; i++){
                    this.templateTeams.push(response.data.Teams[i+6*(this.page-1)]);
                    console.log(this.templateTeams,"xxx")
                  }
						}
						this.pageTotal = Math.ceil(this.teams.length /6);
						if(this.pageTotal===0) this.pageTotal = 1;




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
  
  
  watch:{
   page(newPage,oldPage){
      this.getTeams();
    }
  },
  mounted(){
    this.getTeams();
  }
}

</script>
