<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
}
</script>

<template >
<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
    <!-- Изображение статьи -->
    <div class="h-48 bg-gray-200 flex items-center justify-center">
        <span class="text-5xl">{{ article.icon }}</span>
    </div>
          
    <!-- Контент статьи -->
    <div class="p-6 h-auto lg:h-66 flex flex-col justify-between">
        <div>
            <div class="flex items-center  text-gray-500 mb-2 text-xs sm:text-sm">
                <span>{{ article.date }}</span>
                <span class="!mx-2">•</span>
                <span>{{ article.readTime }} мин чтения</span>
            </div>
            <h3 class="!font-bold !mb-3 text-base sm:text-xl font-[Comfortaa]">{{ article.title }}</h3>
            <p class="text-gray-700 !mb-4">{{ article.excerpt }}</p>
        </div>
        <div class="flex flex-col comtent-end justify-items-end justify-end">
            <div class="flex flex-wrap gap-2 !mb-4">
                <span v-for="(tag, idx) in article.tags" :key="idx"
                    class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                {{ tag }}
                </span>
            </div>
            <button class="text-[#06D6A0] font-medium flex items-center "
                @click="$router.push({ name: 'article', params: { id: article.id } })">
                Читать статью
                <svg class="w-4 h-4 !ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>