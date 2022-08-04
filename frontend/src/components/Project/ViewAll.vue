<template>
  <div class="viewall">
    <h1>所有原型</h1>
    <v-row>
    <v-col cols="12" md="4" v-for="(design,index) in designs" :key="index">
        <!-- <team :team="team"></team> -->
      </v-col>
      </v-row>
  </div>
</template>
<script>
import { Design } from "@/api/design.js";

export default {
  name: 'ViewAll',
   components: {

  },
  data(){
    return{
      designs:[]
    }
  },
    methods: {
      getDesigns(){
        let id=this.$route.params.id
        let s=id.split('JQ')
        let project_id=s[1]
        let formdata=new FormData()
        formdata.append('project_id',project_id);
         Design.AllDesign(formdata)
        .then((response) => {
          this.designs= response.data.designs;
         
          console.log(this.designs)
        })

        .catch((error) => {
          console.log(error)
        });
    },


  },
  mounted(){
    this.getDesigns();
  }
}
</script>
