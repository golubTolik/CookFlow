<script>
import ListItem from '../UI/List/ListItem.vue';
import ArticleItem from '../UI/List/ArticleItem.vue';
export default {
    components: { ListItem, ArticleItem },
  data() {
    return {
      userData: null,
      allRecipes: [],
      allArticles: [],
      likedRecipes: [],
      favoriteArticles: []
    }
  },
  mounted() {
    this.loadUserData();
    this.loadContentData();
    this.filterUserContent();
  },
  methods: {
    // Загрузка данных пользователя из localStorage
    loadUserData() {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.userData = JSON.parse(storedUser);
      }
    },
    
    // Загрузка контента (рецепты и статьи) из localStorage
    loadContentData() {
      const storedRecipes = localStorage.getItem('recipes');
      const storedArticles = localStorage.getItem('articles');
      
      if (storedRecipes) {
        this.allRecipes = JSON.parse(storedRecipes);
      }
      
      if (storedArticles) {
        this.allArticles = JSON.parse(storedArticles);
      }
    },
    
    // Фильтрация контента пользователя
    filterUserContent() {
      if (!this.userData) return;
      
      // Фильтрация рецептов
      this.likedRecipes = this.allRecipes.filter(recipe => 
        this.userData.likedRecipes.includes(recipe.id)
      );
      
      // Фильтрация статей
      this.favoriteArticles = this.allArticles.filter(article => 
        this.userData.favoriteArticles.includes(article.id)
      );
    },
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <main class="container !mx-auto px-4 py-8">
      <!-- Заголовок страницы -->
      <h1 class="text-3xl !font-bold text-gray-800 !mb-8 font-[Comfortaa]">Мой профиль</h1>

      <!-- Сообщение если пользователь не найден -->
      <div v-if="!userData" class="text-center py-12">
        <p class="text-xl text-gray-600">Пользователь не найден</p>
        <p class="text-gray-500 !mt-2">Пожалуйста, войдите в систему</p>
      </div>

      <!-- Контент профиля -->
      <div v-else>
        <!-- Информация о пользователе -->
        <section class="!mb-12 p-6 bg-white rounded-xl shadow-md">
          <div class="flex items-center">
            <div class="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center !mr-4">
              <span class="text-xl font-bold w-16 text-center text-gray-500">{{ userData.name.charAt(0) }}</span>
            </div>
            <div class="!ml-4">
              <h2 class="text-xl font-semibold">{{ userData.name }}</h2>
              <p class="text-gray-600">@{{ userData.login }}</p>
            </div>
          </div>
        </section>

        <!-- Лайкнутые рецепты -->
        <section class="!mb-12">
          <div class="flex justify-between items-center !mb-4">
            <h2 class="text-2xl !font-bold text-gray-800 font-[Comfortaa]">Лайкнутые рецепты</h2>
            <span class="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm">
              {{ likedRecipes.length }}
            </span>
          </div>

          <div v-if="likedRecipes.length === 0" class="text-center py-8 bg-white rounded-xl shadow">
            <p class="text-gray-500">Вы еще не лайкнули ни одного рецепта</p>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListItem v-for="recipe in likedRecipes" :key="recipe.id" :dish="recipe"></ListItem>
          </div>
        </section>

        <!-- Избранные статьи -->
        <section>
            <div class="flex justify-between items-center !mb-4">
                <h2 class="text-2xl !font-bold text-gray-800 font-[Comfortaa]">Избранные статьи</h2>
                <span class="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm">
                {{ favoriteArticles.length }}
                </span>
            </div>

            <div v-if="favoriteArticles.length === 0" class="text-center py-8 bg-white rounded-xl shadow">
                <p class="text-gray-500">У вас нет избранных статей</p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ArticleItem
                    v-for="article in favoriteArticles" 
                    :key="article.id" 
                    :article="article"
                ></ArticleItem>
            </div>
        </section>
      </div>
    </main>
  </div>
</template>



<style scoped>

</style>