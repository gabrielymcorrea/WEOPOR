import { createRouter, createWebHistory } from 'vue-router'

import ProdutoView from '../views/ProdutoView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import ErrorView from "../views/ErrorView.vue"
import RegisterView from "../views/RegisterView.vue"

const routes = [
  {
    path: "/:catchAll(.*)",
    component: ErrorView
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/produtos',
    name: 'Produto',
    component: ProdutoView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
