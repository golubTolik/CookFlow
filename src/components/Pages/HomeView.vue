<script>
import HomeSlide from '@/components/Articles/HomeSlide.vue';

export default {
  props: ['dishes'],
  components: { HomeSlide },
  data() {
    return {
      availableTypeOfDish: ["первое блюдо", "второе блюдо", "салат", "закуска", "выпечка", "соус и маринад", "заготовка", "напиток", "десерт", "гарнир"],
    };
  },
  methods: {
    handleCategorySelected(category) {
      this.$router.push({
        path: '/recipes',
        query: { category }
      });
    },
  },
};
</script>

<template>
  <HomeSlide 
    :dishes="dishes"
    :availableTypeOfDish="availableTypeOfDish"
    @category-selected="handleCategorySelected"
  />
</template>