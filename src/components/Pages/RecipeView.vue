<script>
export default {
  name: 'RecipeView',
  props: {
    dishes: Array
  },
  computed: {
    dish() {
      const id = parseInt(this.$route.params.id);
      return this.dishes.find(d => d.id === id);
    }
  }
}
</script>

<template>
  <div v-if="dish" class="container text-gray-800 !mx-auto px-4 py-8">
    <!-- Кнопка назад -->
    <button @click="$router.go(-1)" class="!mb-6 flex items-center text-[#06D6A0] hover:text-[#05b38d]">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Назад к рецептам
    </button>
    
    <!-- Заголовок -->
    <h1 class="text-3xl md:text-4xl font-bold !mb-4">{{ dish.name }}</h1>
    
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Левая колонка (изображение и детали) -->
      <div class="w-full lg:w-1/2">
        <img :src="dish.img" :alt="dish.name" class="w-full h-auto rounded-lg shadow-lg !mb-6">
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold !mb-4">Детали рецепта</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600">Кухня:</p>
              <p class="font-medium">{{ dish.cuisine }}</p>
            </div>
            <div>
              <p class="text-gray-600">Сложность:</p>
              <p class="font-medium">{{ dish.difficulty }}</p>
            </div>
            <div>
              <p class="text-gray-600">Время приготовления:</p>
              <p class="font-medium">{{ dish.cookingTime }} минут</p>
            </div>
            <div>
              <p class="text-gray-600">Тип блюда:</p>
              <p class="font-medium">{{ dish.typeOfDish }}</p>
            </div>
            <div>
              <p class="text-gray-600">Подходит для:</p>
              <p class="font-medium">{{ dish.typeOfMeal.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Правая колонка (описание и ингредиенты) -->
      <div class="w-full lg:w-1/2">
        <div class="bg-white p-6 rounded-lg shadow-md !mb-6">
          <h2 class="text-xl font-semibold !mb-4">Описание</h2>
          <p class="text-gray-700">{{ dish.description }}</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold !mb-4">Ингредиенты</h2>
          <!-- Здесь будет список ингредиентов -->
          <p class="text-gray-500 italic">Список ингредиентов будет добавлен позже...</p>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="container !mx-auto px-4 py-8 text-center">
    <p class="text-2xl text-gray-500">Рецепт не найден</p>
    <button @click="$router.push('/recipes')" class="!mt-4 px-6 py-2 bg-[#06D6A0] text-white rounded-full">
      Вернуться к рецептам
    </button>
  </div>
</template>

<style scoped>

</style>