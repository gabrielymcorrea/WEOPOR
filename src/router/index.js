import { createRouter, createWebHistory } from 'vue-router'

import ProdutoView from '../views/ProdutoView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/produtos',
    name: 'ProdutoView',
    component: ProdutoView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
