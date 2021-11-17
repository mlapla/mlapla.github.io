import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/1.md',
    name: 'Post'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
