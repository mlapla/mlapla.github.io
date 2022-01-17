import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TilingShaders from '../components/TilingShaders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/1.md',
    name: 'Post'
  },
  {
    path: '/tiles',
    name: 'ThreeJS Tiling Shaders',
    component: TilingShaders
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
