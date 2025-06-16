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
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6" v-if="dishes.length > 0">
    <ListItem
        v-for="dishe in dishes"
        :key="dishe.id"
        :dishe="dishe"
        @openDishe="$emit('openDishe',dishe.id)"
    />
    
  </div>

    <div v-else class="text-center py-12">
      <p class="text-xl text-gray-500">Ничего не найдено</p>
      <button 
        @click="$emit('resetFilters')"
        class="!mt-4 text-sm bg-[#06D6A0] hover:bg-[#05c191] text-white py-2 px-4 rounded-full transition"
      >
        Сбросить фильтры
      </button>
    </div>

</template>

<style scoped>

</style>