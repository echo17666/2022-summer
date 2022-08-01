import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Starting/Home.vue'
import Login from '../components/Starting/Login.vue'
import Register from '../components/Starting/Register.vue'
import Reset from '../components/Starting/Reset.vue'
import Main from '../components/Starting/Main.vue'
import Project from '../components/Project/Manage.vue'
import ShowAll from '../components/Project/ShowAll.vue'
import MeAttend from '../components/Project/MeAttend.vue'
import MeCreate from '../components/Project/MeCreate.vue'
import Deleted from '../components/Project/Deleted.vue'
import People from '../components/People/Manage.vue'
import AllMember from '../components/People/AllTeams.vue'
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
        {path: 'deleted', name:'Deleted',component: Deleted},

    ]
},
{
  path: '/people',
  name: 'People',
  component: People,
  children: [
    {path: '', component: AllMember},
    {path: 'allmember',name:'AllMember', component: AllMember},

]
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
