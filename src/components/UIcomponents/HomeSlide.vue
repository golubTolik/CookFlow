<script>
import heroImage from '@/components/icons/fon.jpg';

export default {
  props: {
    dishes: {
      type: Array,
      required: true
    },
    availableTypeOfDish: {
      type: Array,
      required: true
    },
    goToSlide: {
      type: Function,
      required: true
    },
    openDishe: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
        heroImage: heroImage
    }
  },
  computed: {
    popularDishes() {
      return [...this.dishes]
        .sort((a, b) => b.like - a.like)
        .slice(0, 4);
    },
    newDishes() {
      return [...this.dishes]
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);
    },
    heroStyle() {
        return {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${this.heroImage})`
        };
    },
  },
  
  methods: {
    getCategoryIcon(category) {
      const icons = {
        "завтрак": "🥞",
        "обед": "🍲",
        "ужин": "🍛", 
        "перекус": "🥪",
        "первое блюдо": "🍜",
        "второе блюдо": "🍗",
        "салат": "🥗",
        "закуска": "🥟",
        "выпечка": "🥐",
        "соус и маринад": "🥫",
        "заготовка": "🥫",
        "напиток": "🥤",
        "десерт": "🍰",
        "гарнир": "🍠"
      };
      return icons[category] || "🍴";
    },
    selectCategory(category) {
      this.$emit('category-selected', category);
      this.goToSlide(2);
    }
  }
}
</script>

<template>
  <div>
    <!-- Герой-баннер -->
    <section class="font-[Comfortaa] bg-cover bg-center py-20 md:py-32" :style="heroStyle">
      <div class="container mx-auto px-4 !text-center text-white">
        <h1 class="text-4xl md:text-6xl !font-bold !mb-4">Коллекция рецептов</h1>
        <p class="text-xl md:text-2xl !mb-8 max-w-2xl !mx-auto">Тысячи проверенных рецептов на каждый день для вашей кухни</p>
        <router-link to="/recipes">
          <button class="bg-[#06D6A0] cursor-pointer hover:bg-[#5faf9a] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Найти рецепт
          </button>
        </router-link>
      </div>
    </section>

    <!-- Категории рецептов -->
    <section class="py-12 bg-white">
      <div class="container !mx-auto px-4 text-gray-800">
        <h2 class="text-3xl font-bold text-center !mb-10 font-[Comfortaa]">Категории</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="category in availableTypeOfDish.slice(0, 12)" :key="category" 
               class="category-card bg-gray-50 rounded-xl shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow"
               @click="selectCategory(category)">
            <div class="bg-gray-200 rounded-full w-16 h-16 !mx-auto !mb-3 flex items-center justify-center">
              <span class="text-2xl">{{ getCategoryIcon(category) }}</span>
            </div>
            <h3 class="font-semibold">{{ category }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Популярные рецепты -->
    <section class="py-12 bg-gray-50">
      <div class="container !mx-auto px-4 text-gray-800">
        <div class="flex justify-between items-center !mb-8">
          <h2 class="text-3xl font-bold font-[Comfortaa]">Популярные рецепты</h2>
          <router-link to="/recipes">
            <button @click="goToSlide(2)" class="text-[#06D6A0] hover:text-green-500 font-medium flex items-center">
              Смотреть все
              <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="dish in popularDishes" :key="dish.id" 
               class="dishe-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
               @click="openDishe(dish.id)">
            <!-- <span class="absolute rounded-br-lg rounded-tl-xl text-sm text-gray-800 px-2 py-1 bg-[#06D6A0]">Рецепт</span> -->
            <img v-if="dish.img" class="w-full h-48 object-cover pointer-events-none" :src="dish.img" alt="">
            <div v-else class="w-full h-48 bg-gray-200  rounded-xl flex items-center justify-center text-gray-500">
                <img  class="w-[32px] text-4xl" src="@/components/icons/food.svg" alt="">
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg !mb-1">{{ dish.name }}</h3>
              <div class="flex items-center text-gray-600 text-sm !mb-1">
                <span class="!mr-3 flex"><img class="w-[16px] !mr-[5px]" src="@/components/icons/clock.svg" alt="">{{ dish.cookingTime }} мин</span>
                <span>{{ dish.cuisine }}</span>
              </div>
              <p class="text-gray-700 line-clamp-2">{{ dish.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Новые рецепты -->
    <section class="py-12 bg-white">
      <div class="container !mx-auto px-4 text-gray-800">
        <div class="flex justify-between items-center !mb-8">
          <h2 class="text-3xl font-bold font-[Comfortaa]">Новые рецепты</h2>
          <router-link to="/recipes">
            <button @click="goToSlide(2)" class="text-[#06D6A0] hover:text-green-500 font-medium flex items-center">
              Смотреть все
              <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="dish in newDishes" :key="dish.id" 
               class="dishe-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
               @click="openDishe(dish.id)">
            <!-- <span class="absolute rounded-br-lg rounded-tl-xl text-sm text-gray-800 px-2 py-1 bg-[#06D6A0]">Рецепт</span> -->
            <img v-if="dish.img" class="w-full h-48 object-cover pointer-events-none" :src="dish.img" alt="">
            <div v-else class="w-full h-48 bg-gray-200  rounded-xl flex items-center justify-center text-gray-500">
                <img  class="w-[32px] text-4xl" src="@/components/icons/food.svg" alt="">
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg !mb-1">{{ dish.name }}</h3>
              <div class="flex items-center text-gray-600 text-sm !mb-1">
                <span class="!mr-3 flex"><img class="w-[16px] !mr-[5px]" src="@/components/icons/clock.svg" alt="">{{ dish.cookingTime }} мин</span>
                <span>{{ dish.cuisine }}</span>
              </div>
              <p class="text-gray-700 line-clamp-2">{{ dish.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Преимущества -->
    <section class="py-12 bg-gray-50">
      <div class="container !mx-auto px-4 text-gray-800">
        <h2 class="text-3xl font-bold text-center !mb-10 font-[Comfortaa]">Почему выбирают нас</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-md text-center">
            <div class="text-[#06D6A0] text-4xl !mb-4">✓</div>
            <h3 class="text-xl font-bold !mb-2">Проверенные рецепты</h3>
            <p class="text-gray-600">Каждый рецепт протестирован и получил положительные отзывы</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md text-center">
            <div class="text-4xl !mb-4">⏱️</div>
            <h3 class="text-xl font-bold !mb-2">Экономия времени</h3>
            <p class="text-gray-600">Фильтры по времени приготовления помогут найти идеальный вариант</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md text-center">
            <div class="text-4xl !mb-4">❤️</div>
            <h3 class="text-xl font-bold !mb-2">Для всех вкусов</h3>
            <p class="text-gray-600">Для каждого образа жизни и кулинарных пристрастий</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="py-16 bg-[#06D6A0] text-white text-center">
      <div class="container !mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold !mb-4">Начните готовить прямо сейчас!</h2>
        <p class="text-xl !mb-8 max-w-2xl !mx-auto">Присоединяйтесь к сообществу любителей кулинарии</p>
        <router-link to="/recipes">
          <button @click="goToSlide(2)" class="bg-white cursor-pointer text-[#06D6A0] hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Исследовать коллекцию
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dishe-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.dishe-card:hover {
  transform: translateY(-5px);
}
</style>