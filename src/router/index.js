import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Back_App from "@/Back_App";
import Sys from "@/views/Sys";
import Manage from "@/views/Manage";
import Nav from "@/views/Nav";
import Add from "@/views/Add";
import Edit from "@/views/Edit";
import Statistics from "@/views/Statistics";
import detail from "@/views/detail";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Nav,
    children:[
      {
        path: 'home',
        name: 'index',
        component: Home,
      },
      {
        path: 'display',
        name: 'Display',
        component: () => import(/* webpackChunkName: "about" */ '../views/display.vue')
      },
      {
        path: 'detail',
        name: 'Detail',
        component: detail,
        props: route => ({query:route.query.index})
      }
    ]
  },
  {
    path: '/sys',
    name: 'Sys',
    component: Sys,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'index',
        name : 'Index',
        component: Back_App,
        children:[
          {
            path: 'manage',
            name: 'Manage',
            component: Manage,

          },
          {
            path: 'add',
            name: 'Add',
            component:Add,
          },
          {
            path: 'edit',
            name: 'Mod',
            component: Edit,
            props: route => ({query:route.query.index})
          },
          {
            path: 'statistics',
            name: 'Statistics',
            component: Statistics
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
