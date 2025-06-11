<script>
import ListItem from './ListItem.vue';
export default {
  components: {
    ListItem
  },
  props: {
    dishes: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6" >
    <ListItem
        v-for="dishe in dishes"
        :key="dishe.id"
        :dishe="dishe"
    />
  </div>

</template>

<style scoped>

</style>