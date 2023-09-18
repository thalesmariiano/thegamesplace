import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue')
    },
     {
      path: '/developers',
      name: 'developers',
      component: () => import('../views/DevelopersView.vue')
    }
  ]
})

export default router
