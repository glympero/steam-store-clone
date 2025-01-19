import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GamesTabView from '@/views/GamesTabView.vue'
import GameDetailView from '@/views/GameDetailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { TabType } from '@/types'

const tabTypeValues = Object.values(TabType).join('|')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: `/tab/:tabType(${tabTypeValues})`,
      name: 'GamesTab',
      component: GamesTabView,
      props: true,
    },
    {
      path: '/game/:id',
      name: 'GameDetail',
      component: GameDetailView,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
