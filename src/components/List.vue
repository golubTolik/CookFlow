<script>
import ListItem from './ListItem.vue';
export default {
  components: {
    ListItem
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6" >
    <ListItem
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
    />
  </div>

</template>

<style scoped>

</style>