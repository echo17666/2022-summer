<template>
  <div class="about">
    <h1>This is Login page</h1>
  </div>
</template>
<script>
import { Account } from "@/api/account.js";
export default {
  name: 'Login',
  data(){
    return{}
  },
    methods: {
    login() {
      Account.Login(formdata)
        .then((response) => {       
        })
        .catch((error) => {     
        });
    },
  
  }
}
</script>