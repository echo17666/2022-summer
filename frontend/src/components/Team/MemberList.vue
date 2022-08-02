<template>
  <div class="memberlist">
    <h1>人员列表</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(project,index) in project" :key="index">
        <proitem :project="project"></proitem>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card
          color="black"
          dark
      >
        <v-card-title class="headline red lighten-3">
          Search for Public APIs
        </v-card-title>
        <v-card-text>
          Explore hundreds of free API's ready for consumption! For more information visit
          <a
              class="grey--text text--lighten-3"
              href="https://github.com/toddmotto/public-apis"
              target="_blank"
          >the Github repository</a>.
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
              label="Public APIs"
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
              :disabled="!model"
              color="grey darken-3"
              @click="model = null"
          >
            Clear
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
import ProjectItem from '@/components/Starting/ProjectItem.vue'
export default {
  name: 'MemberList',
  components: {
    proitem:ProjectItem
  },
  data(){
    return{
      dialog: false,
      newProject:{
        name:"",
        introduction:"",
        profile:"",
      },
      project:[
        {name:"aaa",introduction:"yyds",profile:".../assets/logo.png"},
        {name:"bbb",introduction:"hello",profile:".../assets/logo.png"},
        {name:"ccc",introduction:"hi",profile:".../assets/logo.png"},
      ]

    }
  },
  methods: {
    addProject(){
      const newpro={name:this.newProject.name,introduction:this.newProject.introduction,profile: this.newProject.profile};
      this.project.push(newpro);
      console.log(this.project)


      this.$notify({
        title: '人员添加成功',
        type: 'success'
      })
      this.newProject.name='';
      this.newProject.introduction="";
      this.newProject.profile="";
      this.dialog = false;
    },
    cancel(){

      this.newProject.name='';
      this.newProject.introduction="";
      this.newProject.profile="";
      this.dialog=false;

    }

  }
}
</script>
