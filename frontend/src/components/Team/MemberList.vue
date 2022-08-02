<template>
  <div class="memberlist">
    <h1>人员列表</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(people,index) in people" :key="index">
        <peoitem :people="people"></peoitem>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card color="blue lighten-4" light>
        <v-card-title class="headline white--text">
        </v-card-title>
        <v-card-text>
          搜索成员列表
        </v-card-text>
        <v-card-text>
          <v-autocomplete
              v-model="model"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              color="white"
              hide-no-data
              hide-selected
              item-text="Description"
              item-value="API"
              label="search"
              placeholder="Start typing to Search"
              prepend-icon="mdi-database-search"
              return-object
          ></v-autocomplete>
        </v-card-text>
        <v-divider></v-divider>
        <v-expand-transition>
          <v-list v-if="model" class="red lighten-3">
            <v-list-item
                v-for="(field, i) in fields"
                :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="field.value"></v-list-item-title>
                <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expand-transition>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue lighten-4"
              @click="cancel()"
          >
            Cancel
            <v-icon right>mdi-close-circle</v-icon>
          </v-btn>
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
      ]

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
