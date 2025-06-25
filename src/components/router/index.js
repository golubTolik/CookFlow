import { createRouter, createWebHistory } from 'vue-router'

// Импортируем компоненты страниц
import HomeView  from '../Pages/HomeView.vue'
import RecipesView  from '../Pages/RecipesView.vue'
import ArticlesView  from '../Pages/ArticlesView.vue'
import RecipeView from '../Pages/RecipeView.vue'
import ArticleView from '../Pages/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView 
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesView 
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesView 
  },
  { 
    path: '/recipe/:id', 
    component: RecipeView,
    props: true
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticleView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
})

export default router