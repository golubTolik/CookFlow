<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      selectedCategory: null,
      articleCategories: [
        { id: 1, icon: "🥦", title: "Здоровое питание" },
        { id: 2, icon: "🔪", title: "Техники готовки" },
        { id: 3, icon: "🌏", title: "Мировые кухни" },
        { id: 4, icon: "🍰", title: "Выпечка" },
        { id: 5, icon: "👶", title: "Детское питание" },
        { id: 6, icon: "🌱", title: "Вегетарианство" },
        { id: 7, icon: "🍳", title: "Завтраки" },
        { id: 8, icon: "🎉", title: "Праздничные блюда" }
      ],
    }
  },
  computed: {
    filteredArticles() {
      let filtered = this.articles;
      
      // Фильтрация по категории
      if (this.selectedCategory) {
        filtered = filtered.filter(article => article.category === this.selectedCategory.id);
      }
      
      // Пагинация
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return filtered.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      const totalItems = this.selectedCategory 
        ? this.articles.filter(a => a.category === this.selectedCategory.id).length
        : this.articles.length;
        
      return Math.ceil(totalItems / this.itemsPerPage);
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = this.selectedCategory?.id === category.id ? null : category;
      this.currentPage = 1;
    },
    resetFiltres(){
        this.selectedCategory = null
    }
  }
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Заголовок страницы -->
    <div class="container !mx-auto px-4 py-8">
      <h1 class="text-3xl md:text-4xl font-bold text-center !mb-12 font-[Comfortaa]">
        Кулинарная энциклопедия
      </h1>
      
      <!-- Категории статей -->
       <button 
            @click="resetFiltres"
            class="!mb-4 text-sm bg-[#06D6A0] hover:bg-[#05c191] text-white py-2 px-4 rounded-full transition"
        >
            Сбросить выбор
        </button>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 !mb-16" >
        <div v-for="(category, index) in articleCategories" :key="index"
             class="rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg  hover:-translate-y-1 transition-all duration-300"
             :class="{
                'bg-[#06D6A0]': selectedCategory?.id === category.id,
                'bg-white': selectedCategory?.id !== category.id
              }"
             @click="selectCategory(category)">
          <div class="text-4xl !mb-3">{{ category.icon }}</div>
          <h3 class="font-bold">{{ category.title }}</h3>
        </div>
      </div>
      
      
      <!-- Список статей -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="filteredArticles.length > 0">
        <div v-for="article in filteredArticles" :key="article.id"
             class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
          <!-- Изображение статьи -->
          <div class="h-48 bg-gray-200 flex items-center justify-center">
            <span class="text-5xl">{{ article.icon }}</span>
          </div>
          
          <!-- Контент статьи -->
          <div class="p-6 h-auto lg:h-66 flex flex-col justify-between">
            <div>
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>{{ article.date }}</span>
                <span class="!mx-2">•</span>
                <span>{{ article.readTime }} мин чтения</span>
              </div>
              <h3 class="text-xl font-bold !mb-3">{{ article.title }}</h3>
              <p class="text-gray-700 !mb-4">{{ article.excerpt }}</p>
            </div>
            <div class="flex flex-col comtent-end justify-items-end justify-end">
              <div class="flex flex-wrap gap-2 !mb-4">
                <span v-for="(tag, idx) in article.tags" :key="idx"
                    class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {{ tag }}
                </span>
              </div>
              <button class="text-[#06D6A0] font-medium flex items-center "
                    @click="$router.push({ name: 'article', params: { id: article.id } })">
                Читать статью
                <svg class="w-4 h-4 !ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-12">
      <p class="text-xl text-gray-500">Ничего не найдено</p>
      <button 
        @click="resetFiltres"
        class="!mt-4 text-sm bg-[#06D6A0] hover:bg-[#05c191] text-white py-2 px-4 rounded-full transition"
      >
        Сбросить выбор
      </button>
    </div>
      
      <!-- Пагинация -->
      <div class="flex justify-center !mt-12">
        <button v-for="page in totalPages" :key="page"
                class="!mx-1 px-4 py-2 rounded-lg"
                :class="{
                  'bg-[#06D6A0] text-white': currentPage === page,
                  'bg-gray-100 hover:bg-gray-200': currentPage !== page
                }"
                @click="currentPage = page">
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>