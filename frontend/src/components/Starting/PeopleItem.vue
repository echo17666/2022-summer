<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="7">
          <v-card-title>
            <h1>
              {{people.name}}
            </h1>
          </v-card-title>
          <v-card-text>
            {{people.introduction}}
          </v-card-text>
          <v-img v-bind:src="people.profile" alt=""> </v-img>
            <v-card-actions>

            </v-card-actions>
        </v-col>


      </v-row>

    </v-card>

  </div>
</template>

<script>


export default {
  name: "PeopleItem",
  props: ["people"],
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
