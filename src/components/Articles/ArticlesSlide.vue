<script>
import ArticleList from '../UI/List/ArticleList.vue';
export default {
  components: { ArticleList },
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
      // // Фильтрация по категории
      if (this.selectedCategory) {
        return this.articles.filter(article => article.category === this.selectedCategory.id);
      }
      return this.articles
    },
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
          <h3 class="font-bold text-xs sm:text-[15px]">{{ category.title }}</h3>
        </div>
      </div>
      
      
      <!-- Список статей -->
      <ArticleList :articles="filteredArticles" @resetFiltres="resetFiltres"></ArticleList>
    </div>
  </div>
</template>

<style scoped>
</style>