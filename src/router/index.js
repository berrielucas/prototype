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
      children: [
        {
          path: '',
          name: 'homeImApp',
          component: () => import('../views/imrb/IMAppView.vue')
        },
        // Protótipo
        {
          path: ':idPrototype',
          name: 'prototype',
          component: () => import('../views/imrb/PrototypeView.vue'),
          children: []
        },
        // Processo
        {
          path: ':idPrototype/:idProcess',
          name: 'process',
          component: () => import('../views/imrb/PrototypeView.vue'),
          children: []
        },
        // Etapa
        {
          path: ':idPrototype/:idProcess/:idPhase',
          name: 'phase',
          component: () => import('../views/imrb/PrototypeView.vue'),
          children: []
        },
        // Passo
        {
          path: ':idPrototype/:idProcess/:idPhase/:idStep',
          name: 'step',
          component: () => import('../views/imrb/PrototypeView.vue'),
          children: []
        },
        // Component
        {
          path: ':idPrototype/:idProcess/:idPhase/:idStep/:idComponent',
          name: 'step',
          component: () => import('../views/imrb/PrototypeView.vue'),
          children: []
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/app/NotFoundView.vue')
    }
  ]
})

export default router
