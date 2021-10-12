import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import Testcase from '../views/Testcase.vue'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

// 路由管理
const routes = [
  {
    path: '/',  // 路由地址
    name: 'Home',  // 这个 name 最好写上
    // 路由对应的渲染组件
    component: Home,  
    // 指定重定向页面
    redirect: "/layout"  
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    // 嵌套路由
    children: [
      {
        path: "/testcase",
        name: "testcase",
        component: Testcase
      },
      {
        path: "/task",
        name: "task",
        component: Task
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
