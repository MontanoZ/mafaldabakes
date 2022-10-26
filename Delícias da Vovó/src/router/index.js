import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Planejamento',
      name: 'Planejamento',
      component: () => import('../views/Planejamento.vue')
    },
    {
      path: '/Despesas',
      name: 'Despesas',
      component: () => import('../views/Despesas.vue')
    },
    {
      path: '/Produtos',
      name: 'Produtos',
      component: () => import('../views/Produtos.vue')
    }
  ]
})

export default router
