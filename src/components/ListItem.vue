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
  <div class="dishe-card bg-white rounded-xl shadow-md overflow-hidden">
    <div class="h-65 overflow-hidden">
      <img v-if="dishe.img" class="pointer-events-none" :src="dishe.img" alt="">
      <div v-else class="w-full h-full bg-gray-200  rounded-xl flex items-center justify-center text-gray-500">
        <img  class="w-[32px] text-4xl" src="../components/icons/food.svg" alt="">
      </div>
    </div>
    <div class="p-5">
        <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl !font-bold text-gray-800">{{dishe.name}}</h3>
            <span class="text-xs px-2 py-1 rounded-full capitalize"
            :class="{
                'bg-green-100 text-green-800': dishe.difficulty === 'новичок',
                'bg-yellow-100 text-yellow-800': dishe.difficulty === 'любитель',
                'bg-red-100 text-red-800': dishe.difficulty === 'эксперт'
              }"
            >{{dishe.difficulty}}</span>
            
        </div>
        <p class="text-gray-600 mb-4">{{ dishe.description }}</p>
        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">{{ dishe.cuisine }}</span>
            <span class="text-sm text-gray-500 flex"><img class="w-[16px] !mr-[5px]" src="../components/icons/clock.svg" alt="">{{ dishe.cookingTime }} мин</span>
        </div>
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