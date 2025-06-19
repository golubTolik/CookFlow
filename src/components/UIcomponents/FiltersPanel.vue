<script>
import FilterSection from './FilterSection.vue';

export default {
    components: { FilterSection },
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        availableCuisines: {
            type: Array,
            default: () => []
        },
        availableDifficulties: {
            type: Array,
            default: () => []
        },
        availableTime: {
            type: Array,
            default: () => []
        },
        availableTypeOfMeal: {
            type: Array,
            default: () => []
        },
        availableTypeOfDish: {
            type: Array,
            default: () => []
        }
    },
    emits: ['update:modelValue', 'reset'],
    methods: {
        updateFilter(key, value) {
            this.$emit('update:modelValue', {
                ...this.modelValue,
                [key]: value
            });
        }
    }
}
</script>

<template>
    <div class="bg-white rounded-xl shadow-md p-6 top-4">
        <div class="flex justify-between items-center !mb-6">
            <h2 class="text-xl !font-bold text-gray-800 font-[Comfortaa]">Фильтры</h2>
            <button 
                @click="$emit('reset')"
                class="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded-full transition"
            >
                Сбросить
            </button>
        </div>
        
        <!-- Фильтр по кухне -->
        <FilterSection 
            class="!mb-6"
            title="Кухня"
            :options="availableCuisines"
            :modelValue="modelValue.cuisine"
            @update:modelValue="updateFilter('cuisine', $event)"
        />
        
        <!-- Фильтр по сложности -->
        <FilterSection 
            class="!mb-6"
            title="Сложность"
            :options="availableDifficulties"
            :modelValue="modelValue.difficulty"
            @update:modelValue="updateFilter('difficulty', $event)"
        />

        <!-- Фильтр по времени -->
        <FilterSection 
            class="!mb-6"
            title="Время приготовления"
            :options="availableTime"
            :modelValue="modelValue.cookingTime"
            @update:modelValue="updateFilter('cookingTime', $event)"
        />

        <!-- Фильтр по типу приема пищи -->
        <FilterSection 
            class="!mb-6"
            title="Тип приема пищи"
            :options="availableTypeOfMeal"
            :modelValue="modelValue.typeOfMeal"
            @update:modelValue="updateFilter('typeOfMeal', $event)"
        />

        <!-- Фильтр по типу блюда -->
        <FilterSection 
            class="!mb-6"
            title="Тип блюда"
            :options="availableTypeOfDish"
            :modelValue="modelValue.typeOfDish"
            @update:modelValue="updateFilter('typeOfDish', $event)"
        />
    </div>
</template>

<style scoped>

</style>