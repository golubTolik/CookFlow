<script>
export default {
  name: 'RecipeView',
  props: {
    dishes: Array
  },
  data() {
    return {
      newComment: '',
      currentUser: 'Анонимный пользователь'
    }
  },
  computed: {
    dish() {
      const id = parseInt(this.$route.params.id);
      return this.dishes.find(d => d.id === id);
    }
  },
  methods: {
    toggleLike() {
      this.dish.like += 1;
    },
    toggleFavourite() {
      this.dish.favourites += 1;
    },
    addComment() {
      if (this.newComment.trim()) {
        this.dish.comment.push({
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

    <div class="flex space-x-4 !mb-4 text-gray-500">
      <!-- Кнопка лайка -->
      <button @click="toggleLike" class="flex items-center">
        <div class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full">
            <i class="fa-regular fa-heart"></i>
            <span class="!ml-1">{{ dish.like }}</span>
          </div>
      </button>
        
      <!-- Кнопка избранного -->
      <button @click="toggleFavourite" class="flex items-center">
        <div class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full">
            <i :class="['fa-solid', 'fa-bookmark', 'bookmark-icon', {'bookmark-active': ''}]"></i>
            <span class="!ml-1">{{ dish.favourites }}</span>
        </div>
      </button>

      <!-- Ссылка на комментарии -->
      <a href="#comments" class="flex items-center">
        <div class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full">
            <i class="fa-regular fa-comment" ></i>
            <span class="!ml-1">{{ dish.comment.length }}</span>
          </div>
      </a>
    </div>
    
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
                  <div class="flex"><p class="rounded-full px-3 py-1 bg-[#06D6A0] text-white !font-semibold !mb-1 uppercase">{{ subStep.title }}</p></div>
                  <img v-if="subStep.image" :src="subStep.image" alt="" class="w-auto h-auto rounded-lg shadow-lg">
                  {{ subStep.description }}
                </p>
              </div>
            </div>
              
            <!-- Простые шаги без вложенности(подготовка) -->
            <div v-else-if="step.description" class="list-decimal list-inside space-y-2 pl-4">
              <div class="flex"><p class="rounded-full px-3 py-1 bg-[#06D6A0] text-white !font-semibold !mb-1 uppercase">{{ step.title }}</p></div>
              <img v-if="step.image" :src="step.image" alt="" class="w-auto h-auto rounded-lg shadow-lg">
              <p class="!mb-4">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div class="flex !justify-center !mb-6 ">
      <div class="bg-white p-6 rounded-lg shadow-md !mb-8 lg:w-1/2" id="comments">
        <h2 class="text-2xl !font-semibold !mb-6">Комментарии ({{ dish.comment.length }})</h2>
      
        <!-- Форма добавления комментария -->
        <div class="!mb-8">
          <textarea v-model="newComment" placeholder="Напишите ваш комментарий..." class="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#06D6A0] focus:border-transparent !mb-3"></textarea>
          <button @click="addComment" class="px-6 py-2 bg-[#06D6A0] text-white rounded-lg hover:bg-[#05b38d] transition">
            Отправить комментарий
          </button>
        </div>
      
        <!-- Список комментариев -->
        <div v-if="dish.comment.length > 0" class="space-y-6">
          <div v-for="(comment, index) in dish.comment" :key="index" class="border-b pb-6 last:border-b-0 last:pb-0">
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

  <div v-else class="container !mx-auto px-4 py-8 text-center">
    <p class="text-2xl text-gray-500">Рецепт не найден</p>
    <button @click="$router.push('/recipes')" class="!mt-4 px-6 py-2 bg-[#06D6A0] text-white rounded-full">
      Вернуться к рецептам
    </button>
  </div>
</template>

<style scoped>

</style>