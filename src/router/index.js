import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/app/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: AppView,
      children: []
    },
    {
      path: '/inscricao-matricula',
      name: 'imApp',
      component: () => import('../views/imrb/IMAppView.vue'),
      children: []
    }
  ]
})

export default router
