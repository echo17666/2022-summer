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
import CreateTeam from '../components/Teams/CreateTeam.vue'


import Team from '../components/Team/Team.vue'
import MemberList from '../components/Team/MemberList.vue'
import TeamProject from '../components/Team/TeamProject.vue'
import Deleted from '../components/Team/Deleted.vue'

import ProjectManage from '../components/Project/Manage.vue'
import Design from '../components/Project/Design.vue'

import Text from '../components/Project/Text.vue'

import documentEdit from "@/components/documentEdit/documentEdit";
import newDocument from "@/components/documentEdit/newDocument";
import documentmanage from "@/components/documentEdit/Manage"



   
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
    path: '/design',
    name: 'Design',
    component: Design
  },
  {
    path: '/text',
    name: 'Text',
    component: Text
  },
  {
    path: '/project',
    name: 'ProjectManage',
    component: ProjectManage
  },
  {
    path: '/myproject',
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
    {path: 'create',name:'CreateTeam', component: CreateTeam},

   
]
},

{
  path: '/team/:id',
  name: 'Team',
  component: Team,
  children: [
    {path: '', component: MemberList},
    {path: 'list',name:'MemberList', component: MemberList},
    {path: 'deleted', name:'Deleted',component: Deleted},
    {path: 'project', name:'TeamProject',component: TeamProject},
   
]
},
{
  path: '/document',
  name: 'Document',
  component: documentmanage,
  children: [
      {path: '/newdocument', name: 'NewDocument', component: newDocument},
      {path: 'newdocument',name:'DocumentEdit', component: documentEdit}
  ]
},

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
export default router
