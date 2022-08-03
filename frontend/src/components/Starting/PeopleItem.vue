<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="7">
          <v-card-title>
            <h1>
              {{people.user_name}}
            </h1>
          </v-card-title>
          <v-card-text>
            {{people.user_identity}}
          </v-card-text>
          <v-card-text>
            {{people.user_email}}
          </v-card-text>
          <v-card-text>
            {{people.user_true_name}}
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
