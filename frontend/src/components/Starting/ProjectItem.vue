<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="7"> 
            <v-card-title>
              <h1>
             {{project.name}}
             </h1>
            </v-card-title>
          <v-card-text>   
             {{project.introduction}}
          </v-card-text>
          <v-card-actions>
          
          </v-card-actions>
        </v-col>


      </v-row>

    </v-card>
   
  </div>
</template>

<script>


export default {
  name: "ProjectItem",
  props: ["project"],
  data() {
    return {
      
    };
  },
  methods: {
  
  },
  
};
</script>
<style scoped>

</style>
