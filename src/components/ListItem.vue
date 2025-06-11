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
    <!-- <svg class="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
        <circle cx="11" cy="11" r="11" class="fill-sky-400/25" />
        <circle cx="11" cy="11" r="10.5" class="stroke-sky-400/25" />
        <path d="M8 11.5L10.5 14L14 8" class="stroke-sky-800 dark:stroke-sky-300" />
    </svg> -->
  <div class="dishe-card bg-white rounded-xl shadow-md overflow-hidden">
    <div class="h-48 overflow-hidden">
        <div class="w-full h-full bg-gray-200  rounded-xl flex items-center justify-center text-gray-500">
            <i class="fas fa-utensils text-4xl"></i>
            <img src="../components/icons/" alt="">
            <!-- <svg class="w-8 !text-4xl !text-[#e5e7eb] !bg-[#e5e7eb] !border-[#e5e7eb]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg> -->
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
            <span class="text-sm text-gray-500">{{ dishe.cookingTime }} мин</span>
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