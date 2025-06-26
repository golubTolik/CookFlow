<script>
export default {
  name: 'ArticleActions',
  props: {
    likeCount: Number,
    favouriteCount: Number,
    commentCount: Number,
    onLike: Function,
    onFavourite: Function
  }
}
</script>

<template>
  <div class="flex space-x-4 !mb-4 text-gray-500">
    <!-- Кнопка лайка -->
    <button @click="onLike" class="flex items-center">
      <div 
        class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full" 
        :style="{ background: likeCount > 0 ? 'red' : '' }"
      >
        <i class="fa-regular fa-heart"></i>
        <span class="!ml-1">{{ likeCount }}</span>
      </div>
    </button>
    
    <!-- Кнопка избранного -->
    <button @click="onFavourite" class="flex items-center">
      <div 
        class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full" 
        :style="{ background: favouriteCount > 0 ? '#f1c40f' : '' }"
      >
        <i class="fa-solid fa-bookmark"></i>
        <span class="!ml-1">{{ favouriteCount }}</span>
      </div>
    </button>

    <!-- Ссылка на комментарии -->
    <a href="#comments" class="flex items-center">
      <div class="flex items-center !mr-2 bg-gray-100 px-4 py-2 rounded-full">
        <i class="fa-regular fa-comment"></i>
        <span class="!ml-1">{{ commentCount }}</span>
      </div>
    </a>
  </div>
</template>

