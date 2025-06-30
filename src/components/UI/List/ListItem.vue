<script>
import ActionsButton from '../ActionsButton.vue';

export default {
  components: { ActionsButton },
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localDish: null,
      currentUser: null
    }
  },
  created() {
    this.loadCurrentUser();
    this.loadRecipeData(); // Загружаем данные рецепта
  },
  computed: {
    isLiked() {
      return this.localDish?.likes?.includes(this.currentUser?.id) || false;
    },
    isFavorited() {
      return this.localDish?.favorites?.includes(this.currentUser?.id) || false;
    }
  },
  methods: {
    loadCurrentUser() {
      const user = localStorage.getItem('currentUser');
      if (user) {
        this.currentUser = JSON.parse(user);
      }
    },
    // Загружаем данные рецепта из localStorage
    loadRecipeData() {
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      const storedDish = recipes.find(r => r.id === this.dish.id);
      
      // Используем сохранённую версию если есть, иначе оригинальный проп
      this.localDish = storedDish ? { ...storedDish } : { ...this.dish };
    },
    saveRecipe() {
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      const index = recipes.findIndex(r => r.id === this.localDish.id);
      
      if (index !== -1) {
        recipes[index] = this.localDish;
      } else {
        recipes.push(this.localDish);
      }
      
      localStorage.setItem('recipes', JSON.stringify(recipes));
    },
    savelikedRecipes(){
      const index = this.currentUser.likedRecipes.indexOf(this.dish.id);

      if (index === -1) {
        this.currentUser.likedRecipes.push(this.dish.id);
      } else {
        this.currentUser.likedRecipes.splice(index, 1);
      }

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    },
    savefavoriteRecipes(){
      const index = this.currentUser.favoriteRecipes.indexOf(this.dish.id);

      if (index === -1) {
        this.currentUser.favoriteRecipes.push(this.dish.id);
      } else {
        this.currentUser.favoriteRecipes.splice(index, 1);
      }

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));    
    },
    toggleLike() {
      this.loadCurrentUser()

      if (!this.currentUser) {
        // Генерируем глобальное событие
        window.dispatchEvent(new CustomEvent('show-auth-modal'));
        return;
      }
      
      if (!this.localDish.likes) {
        this.localDish.likes = [];
      }
      
      const index = this.localDish.likes.indexOf(this.currentUser.id);
      if (index === -1) {
        this.localDish.likes.push(this.currentUser.id);
      } else {
        this.localDish.likes.splice(index, 1);
      }
      
      this.saveRecipe();
      this.savelikedRecipes();
    },
    toggleFavourite() {
      this.loadCurrentUser()

      if (!this.currentUser) {
        // Генерируем глобальное событие
        window.dispatchEvent(new CustomEvent('show-auth-modal'));
        return;
      }
      
      if (!this.localDish.favorites) {
        this.localDish.favorites = [];
      }
      
      const index = this.localDish.favorites.indexOf(this.currentUser.id);
      if (index === -1) {
        this.localDish.favorites.push(this.currentUser.id);
      } else {
        this.localDish.favorites.splice(index, 1);
      }
      
      this.saveRecipe();
      this.savefavoriteRecipes();
    }
  }
}
</script>

<template>
  <div v-if="localDish" class="dishe-card bg-white rounded-xl shadow-md overflow-hidden" @click="$emit('openDishe', localDish.id)">
    <div class="h-auto overflow-hidden lg:h-65">
      <img v-if="localDish.img" class="pointer-events-none w-full" :src="localDish.img" alt="">
      <div v-else class="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
        <img class="w-[32px] text-4xl" src="@/components/icons/food.svg" alt="">
      </div>
    </div>
    <div class="py-3 px-5 flex flex-col justify-between h-auto sm:h-41">
      <div class="flex justify-between">
        <h3 class="text-xl !font-bold font-[Comfortaa] text-gray-800">{{ localDish.name }}</h3>
        <div class="flex items-center">
          <span class="text-xs px-2 py-1 rounded-full capitalize"
            :class="{
              'bg-green-100 text-green-800': localDish.difficulty === 'новичок',
              'bg-yellow-100 text-yellow-800': localDish.difficulty === 'любитель',
              'bg-red-100 text-red-800': localDish.difficulty === 'эксперт'
            }"
          >
            {{ localDish.difficulty }}
          </span>
          <span class="text-sm text-gray-500 flex !ml-2">
            <img class="w-[16px] !mr-[5px]" src="@/components/icons/clock.svg" alt="">
            {{ localDish.cookingTime }} мин
          </span>
        </div>
      </div>
      <p class="text-gray-600 mb-4">{{ localDish.description }}</p>
      <ActionsButton 
        :likeCount="localDish.likes?.length || 0"
        :favouriteCount="localDish.favorites?.length || 0"
        :commentCount="localDish.comments?.length || 0"
        :isLiked="isLiked"
        :isFavorited="isFavorited"
        :onLike="toggleLike"
        :onFavourite="toggleFavourite"
        class="!mt-1"
      />
    </div>
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