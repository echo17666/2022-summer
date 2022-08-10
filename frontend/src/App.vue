<template>
  <v-app :style="{'z-index':'30'}">
    <navbar v-if="!$route.meta.showNav"></navbar>
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
