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
  <div class="justify-center flex-column" >
    <ListItem
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
    />
  </div>

</template>

<style scoped>

</style>