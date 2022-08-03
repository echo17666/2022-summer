<template>
  <div class="memberlist">
    <h1>人员列表</h1>
    <v-row>
      <v-col cols="12" md="6" v-for="(people,index) in members" :key="index">
        <peoitem :people="people"></peoitem>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline mx-auto">添加成员</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col col="12" md="12">
                <v-text-field
                    v-model="email"
                    label="邮箱"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
          <v-btn color="blue darken-1" text @click="addMember()">添加</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn  @click="dialog=!dialog" class="mx-2" fab dark color="indigo">
      <span class="material-icons-outlined">add</span>
    </v-btn>

  </div>
</template>
<script>
import PeopleItem from "@/components/Starting/PeopleItem";
import { Member } from "@/api/member.js";
export default {
  name: 'MemberList',
  components: {
    peoitem:PeopleItem,
  },
  data(){
    return{
      dialog: false,
      members:[],
      email:"",
    }
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
          this.members=response.data.members
        })
        .catch((error) => {
          console.log(error)
        });
    },
    cancel(){
      this.email=""
      this.dialog=false;
    },
    addMember(){
      let id=this.$route.params.id
      let s=id.split('ZY');
      let team_id=s[1];
      let formdata = new FormData();
      formdata.append("team_id",team_id)
      formdata.append("user_email",this.email)

      Member.AddMember(formdata)
       .then((response) => {
          console.log(response.data)
           this.$notify({
          title: '邀请成功',
          type: 'success'
        })
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
  mounted(){
    this.getMember();

  }
}
</script>
