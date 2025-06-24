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
    <h1 class="text-3xl md:text-4xl font-[Comfortaa] !font-semibold !mb-4">{{ dish.name }}</h1>
    
    <div class="flex flex-col lg:flex-row gap-8 !mb-6">
      <!-- Левая колонка (изображение и детали) -->
      <div class="w-full lg:w-1/2">
        <img :src="dish.img" :alt="dish.name" class="w-full h-auto rounded-lg shadow-lg !mb-6">
        
        <div class="bg-white p-6 rounded-lg shadow-md !mb-6">
          <h2 class="text-xl !font-semibold !mb-4">Детали рецепта</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600">Кухня:</p>
              <p class="!font-medium">{{ dish.cuisine }}</p>
            </div>
            <div>
              <p class="text-gray-600">Сложность:</p>
              <p class="!font-medium">{{ dish.difficulty }}</p>
            </div>
            <div>
              <p class="text-gray-600">Время приготовления:</p>
              <div class="flex items-center"><img class="w-[16px] !mr-[5px]" src="@/components/icons/clock.svg" alt=""><p class="!font-medium">{{ dish.cookingTime }} минут</p></div>
            </div>
            <div>
              <p class="text-gray-600">Тип блюда:</p>
              <p class="!font-medium">{{ dish.typeOfDish }}</p>
            </div>
            <div>
              <p class="text-gray-600">Подходит для:</p>
              <p class="!font-medium">{{ dish.typeOfMeal.join(', ') }}</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex">
            <img :src="dish.author.img" alt="" class="w-[46px] h-[46-px] rounded-full !mr-4">
            <div>
              <p class="text-gray-500">Автор: <span class="text-gray-800 !font-semibold">{{dish.author.name}}</span></p>
              <p class="text-gray-800 font-semibold text-[13px]">{{dish.author.status}}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Правая колонка (описание и ингредиенты) -->
      <div class="w-full lg:w-1/2">

        

        <div class="bg-white p-6 rounded-lg shadow-md !mb-6">
          <h2 class="text-xl !font-semibold !mb-4">Описание</h2>
          <p class="text-gray-700">{{ dish.descriptionFull }}</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl !font-semibold !mb-4">Ингредиенты</h2>
          <ul class="space-y-2">
            <li v-for="(ingredient, index) in dish.ingredients" :key="index" class="flex justify-between border-b-1 border-dashed border-gray-400">
              <span class="text-gray-700">{{ ingredient.name }}</span>
              <span class="text-gray-800 !font-medium">{{ ingredient.quantity }}</span>
            </li>
          </ul>
          <h2 class="text-xl !font-semibold !mt-4">Колличество порций: {{ dish.numberOfServings }}</h2>
        </div>
      </div>
      
    </div>
    <div class="flex !justify-center !mb-6 ">
    <div class="bg-white p-6 rounded-lg shadow-md lg:w-1/2">
      <h2 class="text-xl !font-semibold !mb-4">Шаги приготовления</h2>
      <div class="space-y-6">
        <div v-for="(step, stepIndex) in dish.cookingSteps" :key="stepIndex" class="step">
          <!-- Шаги с подшагами -->
          <div v-if="step.steps">
            <!-- <h3 v-if="step.title" class="!font-semibold text-lg !mb-3">{{ step.title }}</h3> -->
            <div class="list-decimal list-inside space-y-2 pl-4">
              <p v-for="(subStep, subIndex) in step.steps" :key="subIndex" class="!mb-4 flex flex-col">
                <div class="flex"><p class="rounded-full px-3 py-1 bg-green-500 text-white !font-semibold !mb-1 uppercase">{{ subStep.title }}</p></div>
                <img v-if="subStep.image" :src="subStep.image" alt="" class="w-auto h-auto rounded-lg shadow-lg">
                {{ subStep.description }}
              </p>
            </div>
          </div>
              
          <!-- Простые шаги без вложенности(подготовка) -->
          <div v-else-if="step.description" class="list-decimal list-inside space-y-2 pl-4">
            <div class="flex"><p class="rounded-full px-3 py-1 bg-green-500 text-white !font-semibold !mb-1 uppercase">{{ step.title }}</p></div>
            <img v-if="step.image" :src="step.image" alt="" class="w-auto h-auto rounded-lg shadow-lg">
            <p class="!mb-4">{{ step.description }}</p>
          </div>
        </div>
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