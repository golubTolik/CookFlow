<script>
import ArticlesSlide from '@/components/Articles/ArticlesSlide.vue';

export default {
  props: ['articles'],
  components: { ArticlesSlide },
};
</script>
<template>
  <div class="container !mx-auto !px-4 !py-8 text-gray-800">
    <ArticlesSlide :articles="articles"/>
  </div>
</template>