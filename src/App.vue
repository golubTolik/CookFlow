<script >
import List from './components/List.vue';

export default {
    components:{
        List
    },
    data() {
        return{
            dishes : [
                {
                    id: 1,
                    name: "Хачапури по-аджарски",
                    description: "Традиционное грузинское блюдо с яйцом и сыром в форме лодочки.",
                    cuisine: "Грузинская",
                    difficulty: "новичок",
                    cookingTime: 40
                },
                {
                    id: 2,
                    name: "Борщ",
                    description: "Классический украинский суп со свеклой, капустой и сметаной.",
                    cuisine: "Русская",
                    difficulty: "любитель",
                    cookingTime: 90
                },
                {
                    id: 3,
                    name: "Паста Карбонара",
                    description: "Итальянская паста с соусом из яиц, сыра пармезан и панчетты.",
                    cuisine: "Средиземноморская",
                    difficulty: "новичок",
                    cookingTime: 25
                },
                {
                    id: 4,
                    name: "Плов",
                    description: "Восточное блюдо из риса с бараниной, морковью и специями.",
                    cuisine: "Узбекская",
                    difficulty: "эксперт",
                    cookingTime: 120
                },
                {
                    id: 5,
                    name: "Салат Цезарь",
                    description: "Классический салат с курицей, листьями салата и соусом Цезарь.",
                    cuisine: "Американская",
                    difficulty: "новичок",
                    cookingTime: 20
                },
                {
                    id: 6,
                    name: "Рататуй",
                    description: "Французское овощное рагу из баклажанов, кабачков и перцев.",
                    cuisine: "Французская",
                    difficulty: "любитель",
                    cookingTime: 60
                },
                {
                    id: 7,
                    name: "Том Ям",
                    description: "Острый тайский суп с креветками, грибами и кокосовым молоком.",
                    cuisine: "Тайская",
                    difficulty: "эксперт",
                    cookingTime: 45
                },
                {
                    id: 8,
                    name: "Оливье",
                    description: "Традиционный русский салат с колбасой, картофелем и майонезом.",
                    cuisine: "Русская",
                    difficulty: "новичок",
                    cookingTime: 30
                },
                {
                    id: 9,
                    name: "Суши Калифорния",
                    description: "Роллы с крабом, авокадо и огурцом, обернутые икрой тобико.",
                    cuisine: "Японская",
                    difficulty: "любитель",
                    cookingTime: 50
                }
            ],
            selectedFilters: {
                cuisine: [],
                difficulty: []
            },
            searchTerm: '',
        }
    },
    methods: {
        resetFilters() {
            this.selectedFilters.cuisine = [];
            this.selectedFilters.difficulty = [];
            this.searchTerm.value = '';
        },
    },
    computed: {
        // Вычисляемые свойства для фильтров
        availableCuisines() {
            return [...new Set(this.dishes.value.map(dish => dish.cuisine))];
        },
                    
        availableDifficulties() {
            return [...new Set(this.dishes.value.map(dish => dish.difficulty))];
        },
        filteredDishes() {
            return this.dishes.value.filter(dish => {
                // Поиск по названию
                const matchesSearch = dish.name.toLowerCase().includes(this.searchTerm.value.toLowerCase());
                            
                // Фильтр по кухне
                const matchesCuisine = this.selectedFilters.cuisine.length === 0 || 
                    this.selectedFilters.cuisine.includes(dish.cuisine);
                            
                // Фильтр по сложности
                const matchesDifficulty = this.selectedFilters.difficulty.length === 0 || 
                    this.selectedFilters.difficulty.includes(dish.difficulty);
                            
                return matchesSearch && matchesCuisine && matchesDifficulty;
            });
        },
    }
}
</script>

<template>
    <header class="!mb-5 items-center font-[Comfortaa]">
        <div class="container !mx-auto flex justify-between items-center">
            <div class="w-[200px]"><img src="./components/icons/logo3.png" alt=""></div>
            <!-- <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-0">🍳 Коллекция рецептов</h1> -->
            <div class="controls">
                <input checked type="radio" name="name" id="input1" class="hidden">
                <input type="radio" name="name" id="input2" class="hidden">
                <input type="radio" name="name" id="input3" class="hidden">
                <label for="input1" id="label1" class="cursor-pointer text-[20px] text-[#929292] !mr-[10px] duration-200 underline decoration-[#929292] decoration-[2px] underline-offset-[5px]">Главная</label>
                <label for="input2" id="label2" class="cursor-pointer text-[20px] text-[#929292] !mr-[10px] duration-200 underline decoration-[#929292] decoration-[2px] underline-offset-[5px]">Рецепты</label>
                <label for="input3" id="label3" class="cursor-pointer text-[20px] text-[#929292] !mr-[10px] duration-200 underline decoration-[#929292] decoration-[2px] underline-offset-[5px]">Статьи</label>
            </div>
            <div class="cursor-pointer text-xl !px-6 !py-1 border-1 border-[#06D6A0] duration-200 rounded-full capitalize text-black hover:bg-[#06D6A0] hover:-translate-y-1 hover:shadow-lg "><p>Войти</p></div>
        </div>
    </header>
    <body class="!bg-gray-50 flex flex-col lg:flex-row gap-8 container !mx-auto !px-4 !py-8">
        <div class="w-full lg:w-1/4">
            <div class="bg-white rounded-xl shadow-md p-6 sticky top-4">
                <div class="flex justify-between items-center !mb-6">
                    <h2 class="text-xl !font-bold text-gray-800 font-[Comfortaa]">Фильтры</h2>
                    <button 
                        @click="resetFilters"
                        class="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded-full transition"
                    >
                        Сбросить
                    </button>
                </div>
                        
                <!-- Фильтр по кухне -->
                <div class="!mb-6 filter-section">
                    <h3 class="!font-bold text-gray-700 !mb-3 !pb-2 border-b border-gray-300 font-[Comfortaa]">Кухня</h3>
                    <div class="space-y-2">
                        <div 
                            v-for="cuisine in availableCuisines" 
                            :key="cuisine"
                            class="filter-option"
                        >
                            <label class="flex items-center cursor-pointer py-1 px-2 rounded">
                                <input 
                                    type="checkbox" 
                                    v-model="selectedFilters.cuisine" 
                                    :value="cuisine"
                                    class="rounded text-orange-500 focus:ring-orange-500"
                                >
                                <span class="ml-2 text-gray-600">{{ cuisine }}</span>
                            </label>
                        </div>
                    </div>
                </div>
                        
                <!-- Фильтр по сложности -->
                <div class="filter-section">
                    <h3 class="!font-bold text-gray-700 !mb-3 !pb-2 border-b border-gray-300 font-[Comfortaa]">Сложность</h3>
                    <div class="space-y-2">
                        <div 
                            v-for="difficulty in availableDifficulties" 
                            :key="difficulty"
                            class="filter-option"
                        >
                            <label class="flex items-center cursor-pointer py-1 px-2 rounded">
                                <input 
                                    type="checkbox" 
                                    v-model="selectedFilters.difficulty" 
                                    :value="difficulty"
                                    class="rounded text-orange-500 focus:ring-orange-500"
                                >
                                <span class="ml-2 text-gray-600">{{ difficulty }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-3/4">
            <div class="relative w-full md:w-1/3">
                <input 
                    v-model="searchTerm"
                    type="text" 
                    placeholder="Поиск рецептов..." 
                    class="!w-full !py-3 !px-4 !pl-12 rounded-full bg-[#06D6A0] bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-30 transition"
                >
                <!-- <i class="fas fa-search absolute left-4 top-3.5 text-white"></i> -->
            </div>
            <List  v-bind:dishes="filteredDishes"></List>
        </div>
        
    </body>
    <footer class="">

    </footer>
</template>

<style scoped>
.controls #input1:checked ~ .perecluch .text1, 
#input2:checked ~ .perecluch .text2, #input3:checked ~ .perecluch .text3{
    display: flex;
    justify-content: space-around;
}
.controls #input1:checked ~ #label1,
#input2:checked ~ #label2, #input3:checked ~ #label3{
    color: #06D6A0;
    text-decoration-color: #06D6A0;
}
.controls .active{
    color: #06D6A0;
    text-decoration-color: #06D6A0;
}

.filter-section {
    transition: all 0.3s ease;
}
.filter-option {
    transition: background-color 0.2s;
}
.filter-option:hover {
    background-color: #f3f4f6;
}
</style>
