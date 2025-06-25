<script>
export default {
  name: 'ArticlePage',
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
      article: null,

      newComment: '',
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
      this.article.like += 1;
    },
    toggleFavourite() {
      this.article.favourites += 1;
    },
    addComment() {
      if (this.newComment.trim()) {
        this.article.comment.push({
          user: this.currentUser,
          text: this.newComment,
          date: new Date().toLocaleDateString('ru-RU')
        });
        this.newComment = '';
      }
    }
  }
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen text-gray-800">
    <div class="container !mx-auto px-4 py-8">
      <!-- Кнопка "Назад" -->
      <button 
        @click="$router.go(-1)"
        class="!mb-6 flex items-center text-[#06D6A0] hover:text-[#05c191] transition"
      >
        <svg class="w-4 h-4 !mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
        Назад к статьям
      </button>

      <div class="flex space-x-4 !mb-4 text-gray-500">
      <!-- Кнопка лайка -->
      <button @click="toggleLike" class="flex items-center">
        <div class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full">
            <i class="fa-regular fa-heart"></i>
            <span class="!ml-1">{{ article.like }}</span>
          </div>
      </button>
        
      <!-- Кнопка избранного -->
      <button @click="toggleFavourite" class="flex items-center">
        <div class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full">
            <i :class="['fa-solid', 'fa-bookmark', 'bookmark-icon', {'bookmark-active': ''}]"></i>
            <span class="!ml-1">{{ article.favourites }}</span>
        </div>
      </button>

      <!-- Ссылка на комментарии -->
      <a href="#comments" class="flex items-center">
        <div class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full">
            <i class="fa-regular fa-comment" ></i>
            <span class="!ml-1">{{ article.comment.length }}</span>
          </div>
      </a>
    </div>

      <!-- Контент статьи -->
      <div v-if="article" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <!-- Заголовок -->
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
          <h1 class="text-3xl !font-bold !mb-4">{{ article.title }}</h1>
          
          <!-- Краткое описание -->
          <p class="text-gray-700 text-lg !mb-8">{{ article.excerpt }}</p>
          
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
            <span class="text-lg !mr-2">Категория:</span>
            <span class="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
              <span class="text-xl !mr-2">{{ getCategoryIcon(article.category) }}</span>
              {{ getCategoryTitle(article.category) }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Сообщение если статья не найдена -->
      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-500 !mb-4">Статья не найдена</p>
        <button 
          @click="$router.go(-1)"
          class="text-sm bg-[#06D6A0] hover:bg-[#05c191] text-white py-2 px-4 rounded-full transition"
        >
          Вернуться к статьям
        </button>
      </div>

      <!-- Комментарии -->
      <div class="flex !justify-center !mt-6">
      <div class="bg-white p-6 rounded-lg shadow-md lg:w-1/2" id="comments">
        <h2 class="text-2xl !font-semibold !mb-6">Комментарии ({{ article.comment.length }})</h2>
      
        <!-- Форма добавления комментария -->
        <div class="!mb-8">
          <textarea v-model="newComment" placeholder="Напишите ваш комментарий..." class="w-full p-4 border-[#06D6A0] border-1 rounded-lg focus:border-[#06D6A0] focus:outline-none focus:bg-[#06d69e4b]  !mb-3"></textarea>
          <button @click="addComment" class="px-6 py-2 bg-[#06D6A0] text-white rounded-lg hover:bg-[#05b38d] transition">
            Отправить комментарий
          </button>
        </div>
      
        <!-- Список комментариев -->
        <div v-if="article.comment.length > 0" class="space-y-6">
          <div v-for="(comment, index) in article.comment" :key="index" class="border-b pb-6 last:border-b-0 last:pb-0">
            <div class="flex items-start">
              <div class="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center !mr-4">
                <span class="text-xl font-bold text-gray-500">{{ comment.user.charAt(0) }}</span>
              </div>
              <div class="flex flex-col !mb-2">
                <h3 class="!font-semibold text-[16px]">{{ comment.user }}</h3>
                <p class="text-gray-700 text-[14px]">{{ comment.text }}</p>
                <span class="text-gray-500 text-[12px]">{{ comment.date }}</span>
              </div>
            </div>
          </div>
        </div>
      
        <div v-else class="text-center py-8 text-gray-500">
          Пока нет комментариев. Будьте первым!
        </div>
      </div>
    </div>

    </div>
  </div>
</template>



<style scoped>

</style>