<script>
export default {
  name: 'ArticleComments',
  props: {
    comments: Array,
    currentUser: String
  },
  data() {
    return {
      newComment: ''
    }
  },
  methods: {
    submitComment() {
      if (this.newComment.trim()) {
        this.$emit('add-comment', this.newComment);
        this.newComment = '';
      }
    }
  }
}
</script>
<template>
  <div class="flex !justify-center !mt-6">
    <div class="bg-white p-6 rounded-lg shadow-md lg:w-1/2" id="comments">
      <h2 class="text-lg sm:text-2xl !font-semibold !mb-6">Комментарии ({{ comments.length }})</h2>
    
      <!-- Форма добавления комментария -->
      <div class="!mb-8">
        <textarea 
          v-model="newComment" 
          placeholder="Напишите ваш комментарий..." 
          class="w-full p-4 border-[#06D6A0] border-1 rounded-lg focus:border-[#06D6A0] focus:outline-none focus:bg-[#06d69e4b]  !mb-3"
          @keyup.enter="submitComment"
        ></textarea>
        <button 
          @click="submitComment" 
          class="px-6 py-2 bg-[#06D6A0] text-white rounded-lg hover:bg-[#05b38d] transition"
        >
          Отправить комментарий
        </button>
      </div>
    
      <!-- Список комментариев -->
      <div v-if="comments.length > 0" class="space-y-6">
        <div 
          v-for="(comment, index) in comments" 
          :key="index" 
          class="pb-6  last:pb-0"
        >
          <div class="flex items-start">
            <div class="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center !mr-4">
              <span class="text-xl font-bold w-16 text-center text-gray-500">{{ comment.userName.charAt(0) }}</span>
            </div>
            <div class="flex flex-col !mb-2">
              <h3 class="!font-semibold text-[16px]">{{ comment.userName }}</h3>
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
</template>

