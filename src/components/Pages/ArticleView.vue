<script>
import ActionsButton from '../UI/ActionsButton.vue'
import Comments from '../Comments/Comments.vue'
export default {
  name: 'ArticlePage',
  components: { ActionsButton, Comments },
  props: {
    articles: Array,
  },
  data() {
    return {
      categories: [
        { id: 1, icon: "🥦", title: "Здоровое питание" },
        { id: 2, icon: "🔪", title: "Техники готовки" },
        { id: 3, icon: "🌏", title: "Мировые кухни" },
        { id: 4, icon: "🍰", title: "Выпечка" },
        { id: 5, icon: "👶", title: "Детское питание" },
        { id: 6, icon: "🌱", title: "Вегетарианство" },
        { id: 7, icon: "🍳", title: "Завтраки" },
        { id: 8, icon: "🎉", title: "Праздничные блюда" }
      ],

      currentUser: 'Анонимный пользователь'
    }
  },
  computed: {
    article() {
        return this.articles.find(a => a.id === parseInt(this.$route.params.id))
    },
  },
  methods: {
    getCategoryIcon(categoryId) {
        const category = this.categories.find(c => c.id === categoryId)
        return category ? category.icon : '📁'
    },
    getCategoryTitle(categoryId) {
        const category = this.categories.find(c => c.id === categoryId)
        return category ? category.title : 'Без категории'
    },
    toggleLike() {
      this.article.likes += 1;
    },
    toggleFavourite() {
      this.article.favourites += 1;
    },
    addComment(commentText) {
       if (commentText.trim()) {
        this.article.comments.push({
          user: this.currentUser,
          text: commentText,
          date: new Date().toLocaleDateString('ru-RU')
        });
      } 
    }
  }
}
</script>

<template>
  <div class="min-h-screen text-gray-800">
    <div class="container !mx-auto px-4 py-8">
      <!-- Кнопка "Назад" -->
      <button 
        @click="$router.push(`/articles`)"
        class="!mb-6 flex items-center text-[#06D6A0] hover:text-[#05c191] transition"
      >
        <svg class="w-4 h-4 !mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
        Назад к статьям
      </button>

      <ActionsButton 
        v-if="article"
        :likeCount="article.likes.length"
        :favouriteCount="article.favourites.length"
        :commentCount="article.comments.length"
        :onLike="toggleLike"
        :onFavourite="toggleFavourite"
        class="!mb-4"
      />

      <!-- Контент статьи -->
      <div v-if="article" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <!-- Изображение -->
        <div class="h-96 bg-gray-200 flex items-center justify-center">
          <span class="text-9xl">{{ article.icon }}</span>
        </div>
        
        <div class="p-8">
          <!-- Мета-информация -->
          <div class="flex items-center text-gray-500 text-sm !mb-4">
            <span>{{ article.date }}</span>
            <span class="!mx-2">•</span>
            <span>{{ article.readTime }} мин чтения</span>
          </div>
          
          <!-- Заголовок -->
          <h1 class="text-xl !font-bold !mb-4 sm:text-3xl font-[Comfortaa]">{{ article.title }}</h1>
          
          <!-- Краткое описание -->
          <p class="text-gray-700 !mb-8 text-base sm:text-lg">{{ article.excerpt }}</p>
          
          <!-- Контент статьи -->
          <div class="prose max-w-none !mb-8" v-html="article.content"></div>
          
          <!-- Теги -->
          <div class="flex flex-wrap gap-2 !mb-8">
            <span 
              v-for="(tag, idx) in article.tags" 
              :key="idx"
              class="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
          
          <!-- Категория -->
          <div class="flex items-center">
            <span class="text-base sm:text-lg !mr-2">Категория:</span>
            <span class="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
              <span class="text-xl !mr-2">{{ getCategoryIcon(article.category) }}</span>
              <span class="text-xs sm:text-[15px]">{{ getCategoryTitle(article.category) }}</span>
            </span>
          </div>
        </div>
      </div>
      
      <!-- Сообщение если статья не найдена -->
      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-500 !mb-4">Статья не найдена</p>
        <button 
          @click="$router.push(`/articles`)"
          class="text-sm bg-[#06D6A0] hover:bg-[#05c191] text-white py-2 px-4 rounded-full transition"
        >
          Вернуться к статьям
        </button>
      </div>

      <!-- Комментарии -->
    <div v-if="article">
      <Comments 
        v-if="article"
        :comments="article.comments"
        :currentUser="currentUser"
        @add-comment="addComment"
      />
    </div>

    </div>
  </div>
</template>



<style scoped>

</style>