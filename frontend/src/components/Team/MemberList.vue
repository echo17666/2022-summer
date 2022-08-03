<template>
  <div class="memberlist">
    <h1>人员列表</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(people,index) in people" :key="index">
        <peoitem :people="people"></peoitem>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">添加成员</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col col="12" md="12">
                <v-text-field
                    v-model="newPeople.name"
                    :counter="10"
                    label="人员名称"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
          <v-btn color="blue darken-1" text @click="addPeople()">创建</v-btn>
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
export default {
  name: 'MemberList',
  components: {
    peoitem:PeopleItem
  },
  data(){
    return{
      dialog: false,
      newPeople:{
        name:"",
        introduction:"",
        profile:"",
      },
      people:[
        {name:"aaa",introduction:"yyds",profile:"../assets/logo.png"},
        {name:"bbb",introduction:"hello",profile:"../assets/logo.png"},
        {name:"ccc",introduction:"hi",profile:"../assets/logo.png"},
      ],
      model: "",
    }
  },
  methods: {
    addPeople(){
      const newpro={name:this.newPeople.name,introduction:this.newPeople.introduction,profile: this.newPeople.profile};
      this.people.push(newpro);
      console.log(this.people)


      this.$notify({
        title: '人员添加成功',
        type: 'success'
      })
      this.newPeople.name='';
      this.newPeople.introduction="";
      this.newPeople.profile="";
      this.dialog = false;
    },
    cancel(){

      this.newPeople.name='';
      this.newPeople.introduction="";
      this.newPeople.profile="";
      this.dialog=false;

    }

  }
}
</script>
