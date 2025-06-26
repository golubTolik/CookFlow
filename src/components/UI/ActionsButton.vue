<script>
export default {
  name: 'ArticleActions',
  props: {
    likeCount: Number,
    favouriteCount: Number,
    commentCount: Number,
    onLike: Function,
    onFavourite: Function
  },
  methods: {
    handleLike(event) {
      event.stopPropagation();
      this.onLike?.();
    },
    handleFavourite(event) {
      event.stopPropagation();
      this.onFavourite?.();
    },
  }
}
</script>

<template>
  <div class="flex space-x-4 text-gray-500">
    <!-- Кнопка лайка -->
    <button @click="handleLike" class="flex cursor-pointer items-center">
      <div class="flex items-center !mr-2 ">
        <i class="icon fa-regular fa-heart bg-gray-100 px-4 py-2 rounded-full flex items-center" :style="{ background: likeCount > 0 ? '#ff0033' : '' }">
          <span class="!ml-1 text-xs">{{ likeCount }}</span>
        </i>
      </div>
    </button>
    
    <!-- Кнопка избранного -->
    <button @click="handleFavourite" class="flex cursor-pointer items-center">
      <div class="flex items-center !mr-2 ">
        <i class="icon fa-solid fa-bookmark bg-gray-100 px-4 py-2 rounded-full flex items-center" :style="{ background: favouriteCount > 0 ? '#f1c40f' : '' }">
          <span class="!ml-1 text-xs">{{ favouriteCount }}</span>
        </i>
      </div>
    </button>

    <!-- Ссылка на комментарии -->
    <a href="#comments" class="flex items-center">
      <div class="flex items-center !mr-2 ">
        <i class="icon fa-regular fa-comment bg-gray-100 px-4 py-2 rounded-full flex items-center">
          <span class="!ml-1 text-xs">{{ commentCount }}</span>
        </i>
      </div>
    </a>
  </div>
</template>

<style scoped>
.icon{
  transition: all 0.3s ease;
}
.icon:hover {
  transform: scale(1.1);
}
</style>
