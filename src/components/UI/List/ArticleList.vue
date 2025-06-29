<script>
import ArticleItem from './ArticleItem.vue';
export default {
    components: { ArticleItem },
    props: {
        articles: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
<div v-if="articles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ArticleItem 
        v-for="article in articles" 
        :key="article.id" 
        :article="article"
    ></ArticleItem>
</div>
<div v-else class="text-center py-12">
    <p class="text-xl text-gray-500">Ничего не найдено</p>
    <button 
        @click="$emit('resetFiltres')"
        class="!mt-4 text-sm bg-[#06D6A0] hover:bg-[#05c191] text-white py-2 px-4 rounded-full transition"
    >
    Сбросить выбор
    </button>
</div>

</template>

<style scoped>

</style>