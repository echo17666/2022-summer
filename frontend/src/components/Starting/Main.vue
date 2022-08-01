<template>
  <div class="main">

    <v-navigation-drawer
      permanent
      height="90vh"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>hi</v-list-item-title>
            <v-list-item-subtitle>已登录</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="turn(item.link)"
        >
          <v-list-item-icon>
            <span class="material-icons-outlined">
                {{item.icon}}</span>
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
      return {
        items: [
          { title: '团队管理', icon: 'home' ,link:'/'},
          { title: '项目管理', icon: 'home',link:'/project' },
        ],
      }
    },
    methods: {
      turn(link){
        this.$router.push(link)
      }
    }
    }

</script>