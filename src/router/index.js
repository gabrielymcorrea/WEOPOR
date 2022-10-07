import { createRouter, createWebHistory } from 'vue-router'

import ProdutoView from '../views/ProdutoView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import ErrorView from "../views/ErrorView.vue"
import RegisterView from "../views/RegisterView.vue"
import PerfilView from "../views/PerfilView.vue"

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
    name: 'Produtos',
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
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
