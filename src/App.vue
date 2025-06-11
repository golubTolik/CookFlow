<script >
import List from './components/List.vue';
import FilterSection from './components/FilterSection.vue';
import SearchBar from './components/SearchBar.vue';

export default {
    components:{
        List,
        FilterSection,
        SearchBar
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
            this.searchTerm = '';
        },
    },
    computed: {
        // Вычисляемые свойства для фильтров
        availableCuisines() {
            return [...new Set(this.dishes.map(dish => dish.cuisine))];
        },
                    
        availableDifficulties() {
            return [...new Set(this.dishes.map(dish => dish.difficulty))];
        },
        filteredDishes() {
            return this.dishes.filter(dish => {
                // Поиск по названию
                const matchesSearch = dish.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                            
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
    <header class="items-center font-[Comfortaa]">
        <div class="container !mx-auto flex justify-between items-center">
            <div class="w-[200px]"><img src="../src/components/icons/logo4.png" alt=""></div>
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
                 <FilterSection 
                  class="!mb-6"
                  title="Кухня"
                  :options="availableCuisines"
                  v-model="selectedFilters.cuisine"
                />
                        
                <!-- Фильтр по сложности -->
                 <FilterSection 
                  title="Сложность"
                  :options="availableDifficulties"
                  v-model="selectedFilters.difficulty"
                />
            </div>
        </div>
        <div class="w-full lg:w-3/4">

            <SearchBar
                v-model="searchTerm"
            />

            <List v-bind:dishes="filteredDishes" @resetFilters="resetFilters"></List>

        </div>
        
    </body>
    <footer class="py-8 text-center text-gray-500">
        © 2023 Коллекция рецептов. Все права защищены.
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

</style>
