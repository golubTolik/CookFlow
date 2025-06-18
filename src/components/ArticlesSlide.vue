<script>
export default {
  props: {
    goToSlide: {
      type: Function,
      required: true
    },
    openArticle: {
      type: Function,
      default: (id) => console.log("Opening article", id)
    }
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
      articles: [
        {
          id: 1,
          icon: "🍞",
          title: "Идеальное тесто: 7 главных правил",
          excerpt: "Как добиться идеальной текстуры теста для любой выпечки",
          date: "15 мая 2025",
          readTime: 8,
          tags: ["выпечка", "советы", "тесто"],
          category: 4
        },
        {
          id: 2,
          icon: "🥩",
          title: "Стейк как в ресторане: полное руководство",
          excerpt: "От выбора мяса до правильной прожарки - все этапы приготовления",
          date: "10 мая 2025",
          readTime: 12,
          tags: ["мясо", "техника", "ресторанные секреты"],
          category: 2
        },
        {
          id: 3,
          icon: "🧊",
          title: "Ферментация: тренд или полезная технология?",
          excerpt: "Как ферментированные продукты улучшают пищеварение",
          date: "5 мая 2025",
          readTime: 10,
          tags: ["здоровье", "технологии", "тренды"],
          category: 1
        },
        {
          id: 4,
          icon: "🍣",
          title: "Японская кухня: больше чем суши",
          excerpt: "Исследуем разнообразие традиционных японских блюд",
          date: "28 апреля 2025",
          readTime: 14,
          tags: ["азия", "традиции", "морепродукты"],
          category: 3
        },
        {
          id: 5,
          icon: "🥗",
          title: "Сезонные салаты: весеннее меню",
          excerpt: "Лучшие комбинации сезонных овощей для полезных салатов",
          date: "20 апреля 2025",
          readTime: 7,
          tags: ["весна", "овощи", "здоровое питание"],
          category: 1
        },
        {
          id: 6,
          icon: "🍳",
          title: "10 ошибок начинающего кулинара",
          excerpt: "Распространенные ошибки и как их избежать",
          date: "12 апреля 2025",
          readTime: 9,
          tags: ["советы", "обучение", "техника"],
          category: 2
        },
        {
          id: 7,
          icon: "🍫",
          title: "Шоколадные десерты без выпечки",
          excerpt: "Простые рецепты для любителей шоколада",
          date: "5 апреля 2025",
          readTime: 6,
          tags: ["десерты", "шоколад", "без выпечки"],
          category: 4
        },
        {
          id: 8,
          icon: "🍛",
          title: "Индийские специи: гид для начинающих",
          excerpt: "Как использовать специи в традиционных индийских блюдах",
          date: "30 марта 2025",
          readTime: 11,
          tags: ["специи", "индия", "вегетарианство"],
          category: 3
        }
      ]
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
  <div class="articles-page bg-gray-50 min-h-screen">
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
             class="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-transform hover:-translate-y-1"
             @click="selectCategory(category)">
          <div class="text-4xl !mb-3">{{ category.icon }}</div>
          <h3 class="font-bold">{{ category.title }}</h3>
        </div>
      </div>
      
      
      <!-- Список статей -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="filteredArticles.length > 0">
        <div v-for="article in filteredArticles" :key="article.id"
             class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
          <!-- Изображение статьи -->
          <div class="h-48 bg-gray-200 flex items-center justify-center">
            <span class="text-5xl">{{ article.icon }}</span>
          </div>
          
          <!-- Контент статьи -->
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span>{{ article.date }}</span>
              <span class="!mx-2">•</span>
              <span>{{ article.readTime }} мин чтения</span>
            </div>
            <h3 class="text-xl font-bold !mb-3">{{ article.title }}</h3>
            <p class="text-gray-700 !mb-4">{{ article.excerpt }}</p>
            <div class="flex flex-wrap gap-2 !mb-4">
              <span v-for="(tag, idx) in article.tags" :key="idx"
                    class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                {{ tag }}
              </span>
            </div>
            <button class="text-[#06D6A0] font-medium flex items-center "
                    @click="openArticle(article.id)">
              Читать статью
              <svg class="w-4 h-4 !ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </button>
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
.articles-page{
  background-color: #f9fafb;
}
/* Анимация при наведении на категории */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>