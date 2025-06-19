<script>
export default {
    props:{
        modelValue: Array,
    },
    methods:{
      inputValue(event){
        this.$emit('update:modelValue', event.target.value)
      },
    }
}
</script>

<template>
<div class="relative w-full md:w-1/3">
    <input 
        :value="modelValue"
        type="text" 
        placeholder="Поиск рецептов..." 
        class="!w-full !mb-2 !py-3 !px-4 !pl-12 rounded-full border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-[#06d69e4b] focus:bg-opacity-30 transition"
        @input="inputValue"
    >
        <img class="!w-[16px] absolute left-4 top-4.5" src="../components/icons/search.svg" alt="">
    </div>
</template>

<style>

</style>