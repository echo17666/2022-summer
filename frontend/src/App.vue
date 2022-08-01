<template>
  <v-app>
    
    <navbar></navbar>
    <br/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Starting/Navbar.vue'
export default {
  name: 'App',
  components: {
    navbar: Navbar,
  },
}
</script>
