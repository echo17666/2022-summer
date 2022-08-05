<template>
  <div>
    <v-row>
      <v-col cols="12" md="1"/>
      <v-col cols="12" md="10">
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'190px'}">
      <v-row>
        <v-col cols="12" md="8">
          <v-card-title>
            <h1 v-show="people.user_identity=='creator'" :style="{'color':'orange'}">
              
              {{people.user_name}}
            </h1>
             <h1 v-show="people.user_identity=='administrator'" :style="{'color':'blue'}">
              
              {{people.user_name}}
            </h1>
            <h1 v-show="people.user_identity=='member'" >
              
              {{people.user_name}}
            </h1>
          </v-card-title>
          <v-card-text>
            <h3>
            身份：{{people.user_identity}}
            </h3>
            <br/>
            <h3>
           邮箱：{{people.user_email}}
            </h3>
            <br/>
          <h3>
            真实姓名：{{people.user_true_name}}
          </h3>
          </v-card-text>
            <v-card-actions>
            </v-card-actions>
        </v-col>
        <v-col cols="12" md="4"   v-show="identity=='creator' && people.user_identity!='creator'|| identity=='administrator' && people.user_identity=='member'">
          <div class="d-flex justify-center">
             <v-btn  @click="show=!show" icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">more_horiz</span>
    </v-btn>
    </div>
     <v-expand-transition >
      <v-card v-show="show">
      <v-list>

        <v-list-item
        v-show="people.user_identity=='member'"
       @click="kick()"
        >
          <v-list-item-title>移出团队</v-list-item-title>
        </v-list-item>

         <v-list-item
        v-show="people.user_identity=='member'"
       @click="higher()"
        >
          <v-list-item-title>升级管理</v-list-item-title>
        </v-list-item>

         <v-list-item
        v-show="people.user_identity=='administrator'"
       @click="lower()"
        >
          <v-list-item-title>撤销管理</v-list-item-title>
        </v-list-item>

   



      </v-list>
      </v-card>
    </v-expand-transition>
        </v-col>


      </v-row>

    </v-card>
    </v-col>
    <v-col cols="12" md="1"/>
    </v-row>

  </div>
</template>

<script>
  import { Member } from "@/api/member.js";

export default {

  name: "PeopleItem",
  props: ["people"],
  data() {
    return {
      identity:"",
      show:false,
      
    };
  },
  methods: {
    getMember(){
      let id=this.$route.params.id
      
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData();
      formdata.append("team_id",team_id)
      Member.ShowMember(formdata)
       .then((response) => {
          this.identity=response.data.self_identity
        })
        .catch((error) => {
          console.log(error)
        });
    },
    kick(){
      let id=this.$route.params.id
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData();
      formdata.append("team_id",team_id)
      formdata.append("user_id",this.people.id)
      formdata.append("user_identity","out")
      Member.SetIdentity(formdata)
      .then((response) => {
         this.$notify({
          title: '成功移除用户',
          type: 'success'
        })
          this.$router.go(0)
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    higher(){
      let id=this.$route.params.id
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData();
      formdata.append("team_id",team_id)
      formdata.append("user_id",this.people.id)
      formdata.append("user_identity","administrator")
      console.log(formdata)
      Member.SetIdentity(formdata)
      .then((response) => {
          this.people.user_identity='administrator'
         this.$notify({
          title: '成功设置管理',
          type: 'success'
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    lower(){
      let id=this.$route.params.id
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData();
      formdata.append("team_id",team_id)
      formdata.append("user_id",this.people.id)
      formdata.append("user_identity","member")
      
      Member.SetIdentity(formdata)

      .then((response) => {
          this.people.user_identity='member'
         this.$notify({
          title: '成功撤销管理',
          type: 'success'
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }

  },
  mounted(){
    this.getMember();

  }

};
</script>
<style scoped>

</style>
