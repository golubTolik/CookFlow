<script>
export default {
  name: 'ArticleActions',
  props: {
    likeCount: Number,
    favouriteCount: Number,
    commentCount: Number,
    isLiked: Boolean,
    isFavorited: Boolean,
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
        <i class="icon fa-regular fa-heart bg-gray-100 px-4 py-2 rounded-full flex items-center" :class="[isLiked  ? 'text-red-500' : '']">
          <span class="!ml-2 text-xs text-gray-500">{{ likeCount }}</span>
        </i>
      </div>
    </button>
     <!-- <p :class="['text-xl', likeCount > 0 ? 'text-red-500' : 'text-gray-400']" >♥</p> -->
    <!-- Кнопка избранного -->
    <button @click="handleFavourite" class="flex cursor-pointer items-center">
      <div class="flex items-center !mr-2 ">
        <i class="icon fa-solid fa-bookmark bg-gray-100 px-4 py-2 rounded-full flex items-center" :class="[isFavorited ? 'text-[#f1c40f]' : '']">
          <span class="!ml-2 text-xs text-gray-500">{{ favouriteCount }}</span>
        </i>
      </div>
    </button>

    <!-- Ссылка на комментарии -->
    <a href="#comments" class="flex items-center">
      <div class="flex items-center !mr-2 ">
        <i class="icon fa-regular fa-comment bg-gray-100 px-4 py-2 rounded-full flex items-center">
          <span class="!ml-2 text-xs">{{ commentCount }}</span>
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
