<script>
export default {
  props: {
    dishe: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <div class="dishe-card bg-white rounded-xl shadow-md overflow-hidden" @click="$emit('openDishe',dishe.id)">
    <div class="h-65 overflow-hidden">
      <span class="absolute rounded-br-lg rounded-tl-xl text-sm text-gray-800 px-2 py-1 bg-[#06D6A0]">Рецепт</span>
      <img v-if="dishe.img" class="pointer-events-none" :src="dishe.img" alt="">
      <div v-else class="w-full h-full bg-gray-200  rounded-xl flex items-center justify-center text-gray-500">
        <img  class="w-[32px] text-4xl" src="../components/icons/food.svg" alt="">
        
      </div>
    </div>
    <div class="py-3 px-5">
        <div class="flex justify-between">
            <h3 class="text-xl !font-bold text-gray-800">{{dishe.name}}</h3>
            <div class="flex items-center ">
              <span class="text-xs px-2 py-1 rounded-full capitalize"
              :class="{
                  'bg-green-100 text-green-800': dishe.difficulty === 'новичок',
                  'bg-yellow-100 text-yellow-800': dishe.difficulty === 'любитель',
                  'bg-red-100 text-red-800': dishe.difficulty === 'эксперт'
                }"
              >{{dishe.difficulty}}</span>
              <span class="text-sm text-gray-500 flex !ml-2"><img class="w-[16px] !mr-[5px]" src="../components/icons/clock.svg" alt="">{{ dishe.cookingTime }} мин</span>
            </div>
        </div>
        <p class="text-gray-600 mb-4">{{ dishe.description }}</p>
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