<template>
    

<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
       <router-link :to="{name:'ShowAll'}">
      <v-btn
        text
      >
        <span class="mr-2">Project</span>

      </v-btn>
      </router-link>
      <router-link :to="{name:'Login'}">
      <v-btn
        text
      >
        <span class="mr-2">Login</span>

      </v-btn>
      </router-link>

      <router-link :to="{path:'/'}">
      <v-btn
        text
      >
        <span class="mr-2">Home</span>

      </v-btn>
      </router-link>
     
    </v-app-bar>
</template>
    
<script>
export default {
  name: 'Navbar'
}
</script>