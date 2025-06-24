<script>
import FilterSection from './FilterSection.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
    setup() {
        const isMobile = ref(false);
        const isFiltersOpen = ref(false);
        
        const checkMobile = () => {
            isMobile.value = window.innerWidth < 768;
        };
        
        onMounted(() => {
            checkMobile();
            if (isMobile.value) isFiltersOpen.value = false;
            window.addEventListener('resize', checkMobile);
        });
        
        onBeforeUnmount(() => {
            window.removeEventListener('resize', checkMobile);
        });
        
        return {
            isMobile,
            isFiltersOpen,
            toggleFilters: () => isFiltersOpen.value = !isFiltersOpen.value
        };
    },
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
        <div class="flex justify-between items-center">
            <h2 class="text-xl !font-bold text-gray-800 font-[Comfortaa]">Фильтры</h2>
            
            <div class="flex items-center">
                <!-- Кнопка показа/скрытия фильтров (только на мобильных) -->
                <button 
                    v-if="isMobile"
                    @click="toggleFilters"
                    class="md:hidden text-sm bg-[#06D6A0] hover:bg-[#05b38d] text-white py-1 px-3 rounded-full transition flex items-center"
                >
                    <span>{{ isFiltersOpen ? 'Скрыть' : 'Фильтры' }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform" 
                         :class="{ 'rotate-180': isFiltersOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Контейнер фильтров (скрывается на мобильных) -->
        <div v-show="!isMobile || isFiltersOpen" class="filters-container">
            <!-- Фильтр по кухне -->
            <FilterSection 
                class="!mb-6 !mt-6"
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
        
            <!-- Кнопка сброса -->
            <button 
            @click="$emit('resetFilters')"
            class="text-sm bg-gray-300 hover:bg-gray-200 text-gray-800 !py-3 !px-3  rounded-full transition"
            >
            Сбросить фильтры
            </button>
        </div>
    </div>
</template>

<style scoped>
.filters-container {
  transition: all 0.3s ease;
}
</style>