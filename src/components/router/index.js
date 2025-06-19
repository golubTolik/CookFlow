import { createRouter, createWebHistory } from 'vue-router'

// Импортируем компоненты страниц
import HomePage from '../Pages/HomePage.vue'
import ArticlesPage from '../Pages/ArticlesPage.vue'
import DishePage from '../Pages/DishePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/dishe',
    name: 'dishe',
    component: DishePage
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router