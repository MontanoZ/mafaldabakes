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
      component: () => import('../views/Despesas.vue'),
      input_despesas_fixas: "",
      input_despesas_variaveis: ""
    },
    {
      path: '/Produtos',
      name: 'Produtos',
      component: () => import('../views/Produtos.vue')
    }
  ],

  methods:{
    submitForm(e){
      e.preventDefault();
      console.log("oi")
    }
  }
})



export default router
