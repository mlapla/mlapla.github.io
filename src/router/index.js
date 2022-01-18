import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TilingShaders from '../views/TilingShaders.vue'
import PBRDemo from '../views/PBRDemo.vue'
import NotFound from '../views/NotFound.vue'

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
  },
  {
    path: '/pbr-demo',
    name: 'ThreeJS PBR demo',
    component: PBRDemo
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    name: 'NotFound'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
