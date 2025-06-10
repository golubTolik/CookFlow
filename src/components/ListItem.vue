<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
    <!-- <svg class="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
        <circle cx="11" cy="11" r="11" class="fill-sky-400/25" />
        <circle cx="11" cy="11" r="10.5" class="stroke-sky-400/25" />
        <path d="M8 11.5L10.5 14L14 8" class="stroke-sky-800 dark:stroke-sky-300" />
    </svg> -->
  <div class="recipe-card bg-white rounded-xl shadow-md overflow-hidden">
    <div class="h-48 overflow-hidden">
        <div class="w-full h-full bg-gray-200  rounded-xl flex items-center justify-center text-gray-500">
            <i class="fas fa-utensils text-4xl"></i>
        </div>
    </div>
    <div class="p-5">
        <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl !font-bold text-gray-800">{{recipe.name}}</h3>
            <span class="text-xs px-2 py-1 rounded-full capitalize"
            :class="{
                'bg-green-100 text-green-800': recipe.difficulty === 'новичок',
                'bg-yellow-100 text-yellow-800': recipe.difficulty === 'любитель',
                'bg-red-100 text-red-800': recipe.difficulty === 'эксперт'
              }"
            >{{recipe.difficulty}}</span>
            
        </div>
        <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">{{ recipe.cuisine }}</span>
            <span class="text-sm text-gray-500">{{ recipe.cookingTime }} мин</span>
        </div>
      </div>
  </div>
</template>

<style scoped>
.recipe-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.recipe-card:hover {
  transform: translateY(-5px);
}
</style>