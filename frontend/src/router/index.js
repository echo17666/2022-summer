import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Starting/Home.vue'
import Login from '../components/Starting/Login.vue'
import Register from '../components/Starting/Register.vue'
import Reset from '../components/Starting/Reset.vue'
import Main from '../components/Starting/Main.vue'
import Project from '../components/MyProject/Manage.vue'
import ShowAll from '../components/MyProject/ShowAll.vue'
import MeAttend from '../components/MyProject/MeAttend.vue'
import MeCreate from '../components/MyProject/MeCreate.vue'

import Teams from '../components/Teams/Manage.vue'
import AllTeams from '../components/Teams/AllTeams.vue'


import Team from '../components/Team/Team.vue'
import MemberList from '../components/Team/MemberList.vue'
import TeamProject from '../components/Team/TeamProject.vue'
import Deleted from '../components/Team/Deleted.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/project',
    component: Project,
    // meta: {
    //     requiresAuth: true
    // },
    children: [
        {path: '', component: ShowAll},
        {path: 'showall', name:'ShowAll',component: ShowAll},
        {path: 'mecreate', name:'MeCreate',component: MeCreate},
        {path: 'meattend', name:'MeAttend',component: MeAttend},

       
    ]
},
{
  path: '/teams',
  name: 'Teams',
  component: Teams,
  children: [
    {path: '', component: AllTeams},
    {path: 'allteams',name:'AllTeams', component: AllTeams},

   
]
},

{
  path: '/team',
  name: 'Team',
  component: Team,
  children: [
    {path: '', component: MemberList},
    {path: 'list',name:'MemberList', component: MemberList},
    {path: 'deleted', name:'Deleted',component: Deleted},
    {path: 'project', name:'TeamProject',component: TeamProject},
   
]
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
