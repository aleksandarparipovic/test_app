import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/Login.vue'
import LoggedInPage from '../components/LoginPage.vue'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/logged-in', component: LoggedInPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
