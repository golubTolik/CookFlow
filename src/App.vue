<script >
import List from './components/List.vue';
import FilterSection from './components/FilterSection.vue';
import SearchBar from './components/SearchBar.vue';
import Dialog from './components/UIcomponents/Dialog.vue';
import Login from './components/Login.vue';
import FiltersPanel from './components/FiltersPanel.vue';

export default {
    components:{
        List,
        FilterSection,
        SearchBar,
        Dialog,
        Login,
        FiltersPanel
    },
    data() {
        return{
            dialogVisible: false,

            dishes : [
                {
                    id: 1,
                    name: "Хачапури по-аджарски",
                    img: './src/components/icons/Hachapuri-po-adjarski-500x350-1000x667.jpeg',
                    description: "Традиционное грузинское блюдо с яйцом и сыром в форме лодочки.",
                    cuisine: "Грузинская",
                    difficulty: "новичок",
                    cookingTime: 40,
                    typeOfMeal: ["обед", "ужин"],
                    typeOfDish: "второе блюдо",
                },
                {
                    id: 2,
                    name: "Борщ",
                    img: "./src/components/icons/borsh.jpg",
                    description: "Классический украинский суп со свеклой, капустой и сметаной.",
                    cuisine: "Русская",
                    difficulty: "любитель",
                    cookingTime: 90,
                    typeOfMeal: ["обед", "ужин"],
                    typeOfDish: "первое блюдо",
                },
                {
                    id: 3,
                    name: "Паста Карбонара",
                    img: "./src/components/icons/macarrao-com-presunto.jpeg",
                    description: "Итальянская паста с соусом из яиц, сыра пармезан и панчетты.",
                    cuisine: "Средиземноморская",
                    difficulty: "новичок",
                    cookingTime: 25,
                    typeOfMeal: ["обед", "ужин"],
                    typeOfDish: "первое блюдо",
                },
                {
                    id: 4,
                    name: "Плов",
                    img: "./src/components/icons/plov.jpg",
                    description: "Восточное блюдо из риса с бараниной, морковью и специями.",
                    cuisine: "Узбекская",
                    difficulty: "эксперт",
                    cookingTime: 120,
                    typeOfMeal: ["ужин"],
                    typeOfDish: "второе блюдо",
                },
                {
                    id: 5,
                    name: "Салат Цезарь",
                    img: "./src/components/icons/cezar.jpg",
                    description: "Классический салат с курицей, листьями салата и соусом Цезарь.",
                    cuisine: "Американская",
                    difficulty: "новичок",
                    cookingTime: 20,
                    typeOfMeal: ["перекус"],
                    typeOfDish: "салат",
                },
                {
                    id: 6,
                    name: "Рататуй",
                    img: "./src/components/icons/rattatyi.jpg",
                    description: "Французское овощное рагу из баклажанов, кабачков и перцев.",
                    cuisine: "Французская",
                    difficulty: "любитель",
                    cookingTime: 60,
                    typeOfMeal: ["обед"],
                    typeOfDish: "гарнир",
                },
                {
                    id: 7,
                    name: "Том Ям",
                    img: "./src/components/icons/tomYm.png",
                    description: "Острый тайский суп с креветками, грибами и кокосовым молоком.",
                    cuisine: "Тайская",
                    difficulty: "эксперт",
                    cookingTime: 45,
                    typeOfMeal: ["обед"],
                    typeOfDish: "первое блюдо",
                },
                {
                    id: 8,
                    name: "Оливье",
                    img: "./src/components/icons/olivie.jpg",
                    description: "Традиционный русский салат с колбасой, картофелем и майонезом.",
                    cuisine: "Русская",
                    difficulty: "новичок",
                    cookingTime: 30,
                    typeOfMeal: ["перекус"],
                    typeOfDish: "салат",
                },
                {
                    id: 9,
                    name: "Суши Калифорния",
                    img: "./src/components/icons/kalifonia.jpg",
                    description: "Роллы с крабом, авокадо и огурцом, обернутые икрой тобико.",
                    cuisine: "Японская",
                    difficulty: "любитель",
                    cookingTime: 50,
                    typeOfMeal: ["ужин"],
                    typeOfDish: "второе блюдо",
                },
                {
                    id: 10,
                    name: "Яйцо пашот в микроволновке",
                    img: "./src/components/icons/pashot.jpg",
                    description: "Суть яйца пашот кроется в его названии. В переводе с французского, это 'ошпаренный кипятком'.",
                    cuisine: "Французская",
                    difficulty: "новичок",
                    cookingTime: 3,
                    typeOfMeal: ["завтрак"],
                    typeOfDish: "закуска",
                }
            ],
            selectedFilters: {
                cuisine: [],
                difficulty: [],
                cookingTime: [],
                typeOfMeal: [],
                typeOfDish: [],
            },
            searchTerm: '',
            availableDifficulties: ["новичок", "любитель","эксперт"],
            availableTime: ["до 15 минут", "до 30 минут", "до 1 часа", "более часа"],
            availableTypeOfMeal: ["завтрак", "обед", "полдник", "ужин", "перекус"],
            availableTypeOfDish: ["первое блюдо", "второе блюдо", "салат", "закуска", "выпечка", "соус и маринад", "заготовка", "напиток", "десерт", "гарнир"],
        }
    },
    methods: {
        resetFilters() {
            this.selectedFilters.cuisine = [];
            this.selectedFilters.difficulty = [];
            this.selectedFilters.cookingTime = [];
            this.selectedFilters.typeOfMeal = [];
            this.selectedFilters.typeOfDish = [];
            this.searchTerm = '';
        },
    },
    computed: {
        // Вычисляемые свойство для фильтра по кухне
        availableCuisines() {
            return [...new Set(this.dishes.map(dish => dish.cuisine))];
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
                
                // Фильтр по времени
                const matchesTime = this.selectedFilters.cookingTime.length === 0 || 
                    this.selectedFilters.cookingTime.some(timeRange => {
                        switch(timeRange) {
                            case "до 15 минут":
                                return dish.cookingTime <= 15;
                            case "до 30 минут":
                                return dish.cookingTime <= 30;
                            case "до 1 часа":
                                return dish.cookingTime <= 60;
                            case "более часа":
                                return dish.cookingTime > 60;
                            default:
                                return true;
                        }
                    });
                            
                // Фильтр по типу приема пищи
                const matchesTypeOfMeal = this.selectedFilters.typeOfMeal.length === 0 || 
                    this.selectedFilters.typeOfMeal.some(meal => dish.typeOfMeal.includes(meal));
                            
                // Фильтр по типу блюда
                const matchesTypeOfDish = this.selectedFilters.typeOfDish.length === 0 || 
                    this.selectedFilters.typeOfDish.includes(dish.typeOfDish);

                return matchesSearch && matchesCuisine && matchesDifficulty && matchesTime && matchesTypeOfMeal && matchesTypeOfDish;
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
            <div class="cursor-pointer text-xl !px-6 !py-1 border-1 border-[#06D6A0] duration-200 rounded-full capitalize text-black hover:bg-[#06D6A0] hover:-translate-y-1 hover:shadow-lg" @click="dialogVisible=true"><p>Войти</p></div>
            <Dialog v-model:show="dialogVisible">
                <Login v-model:show="dialogVisible"/>
            </Dialog>
        </div>
    </header>
    <body class="!bg-gray-50 flex flex-col lg:flex-row gap-8 container !mx-auto !px-4 !py-8">
        <div class="w-full lg:w-1/4">
            <FiltersPanel 
                v-model:modelValue="selectedFilters"
                :available-cuisines="availableCuisines"
                :available-difficulties="availableDifficulties"
                :available-time="availableTime"
                :available-type-of-meal="availableTypeOfMeal"
                :available-type-of-dish="availableTypeOfDish"
                @reset="resetFilters"
            />
        </div>
        <div class="w-full lg:w-3/4">

            <SearchBar v-model="searchTerm"/>

            <List v-bind:dishes="filteredDishes" @resetFilters="resetFilters"></List>

        </div>
        
    </body>
    <footer class="py-8 text-center text-gray-500">
        © 2025 Коллекция рецептов. Все права защищены.
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

body.dialog-open {
  overflow: hidden;
}

</style>
