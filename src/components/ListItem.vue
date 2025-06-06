<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="p-[15px] !mt-[15px] border-2 border-[#7FFFD4] bg-white text-black" >
    <!-- <svg class="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
        <circle cx="11" cy="11" r="11" class="fill-sky-400/25" />
        <circle cx="11" cy="11" r="10.5" class="stroke-sky-400/25" />
        <path d="M8 11.5L10.5 14L14 8" class="stroke-sky-800 dark:stroke-sky-300" />
    </svg> -->
    <div>{{ recipe.name }}</div>
    <div>{{ recipe.description }}</div>
    <div>{{ recipe.difficulty }}</div>
  </div>
</template>

<style scoped>

</style>