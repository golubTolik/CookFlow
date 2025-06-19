<script >
import List from './components/List.vue';
import FilterSection from './components/UIcomponents/FilterSection.vue';
import SearchBar from './components/UIcomponents/SearchBar.vue';
import Dialog from './components/UIcomponents/Dialog.vue';
import Login from './components/UIcomponents/Login.vue';
import FiltersPanel from './components/UIcomponents/FiltersPanel.vue';
import Header from './components/Header.vue';
import HomeSlide from './components/Pages/HomeSlide.vue';
import ArticlesSlide from './components/Pages/ArticlesSlide.vue';

import hachImg from '@/components/icons/Hachapuri-po-adjarski-500x350-1000x667.jpeg'
import borshImg from '@/components/icons/borsh.jpg'
import macarraoImg from '@/components/icons/macarrao-com-presunto.jpeg'
import plovImg from '@/components/icons/plov.jpg'
import cezarImg from '@/components/icons/cezar.jpg'
import rattatyiImg from '@/components/icons/rattatyi.jpg'
import tomYmImg from '@/components/icons/tomYm.png'
import olivieImg from '@/components/icons/olivie.jpg'
import kalifoniaImg from '@/components/icons/kalifonia.jpg'
import pashotImg from '@/components/icons/pashot.jpg'

import simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

export default {
    components:{
        List,
        FilterSection,
        SearchBar,
        Dialog,
        Login,
        FiltersPanel,
        Header,
        HomeSlide,
        ArticlesSlide,
        simplebar
    },
    data() {
        return{
            dialogVisible: false,
            currentSlide: 1,
            isMenuOpen: false,

            dishes : [
                {
                    id: 1,
                    name: "Хачапури по-аджарски",
                    img: hachImg,
                    description: "Традиционное грузинское блюдо с яйцом и сыром в форме лодочки.",
                    cuisine: "Грузинская",
                    difficulty: "новичок",
                    cookingTime: 40,
                    typeOfMeal: ["обед", "ужин"],
                    typeOfDish: "второе блюдо",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 2,
                    name: "Борщ",
                    img: borshImg,
                    description: "Классический украинский суп со свеклой, капустой и сметаной.",
                    cuisine: "Русская",
                    difficulty: "любитель",
                    cookingTime: 90,
                    typeOfMeal: ["обед", "ужин"],
                    typeOfDish: "первое блюдо",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 3,
                    name: "Паста Карбонара",
                    img: macarraoImg,
                    description: "Итальянская паста с соусом из яиц, сыра пармезан и панчетты.",
                    cuisine: "Средиземноморская",
                    difficulty: "новичок",
                    cookingTime: 25,
                    typeOfMeal: ["обед", "ужин"],
                    typeOfDish: "первое блюдо",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 4,
                    name: "Плов",
                    img: plovImg,
                    description: "Восточное блюдо из риса с бараниной, морковью и специями.",
                    cuisine: "Узбекская",
                    difficulty: "эксперт",
                    cookingTime: 120,
                    typeOfMeal: ["ужин"],
                    typeOfDish: "второе блюдо",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 5,
                    name: "Салат Цезарь",
                    img: cezarImg,
                    description: "Классический салат с курицей, листьями салата и соусом Цезарь.",
                    cuisine: "Американская",
                    difficulty: "новичок",
                    cookingTime: 20,
                    typeOfMeal: ["перекус"],
                    typeOfDish: "салат",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 6,
                    name: "Рататуй",
                    img: rattatyiImg,
                    description: "Французское овощное рагу из баклажанов, кабачков и перцев.",
                    cuisine: "Французская",
                    difficulty: "любитель",
                    cookingTime: 60,
                    typeOfMeal: ["обед"],
                    typeOfDish: "гарнир",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 7,
                    name: "Том Ям",
                    img: tomYmImg,
                    description: "Острый тайский суп с креветками, грибами и кокосовым молоком.",
                    cuisine: "Тайская",
                    difficulty: "эксперт",
                    cookingTime: 45,
                    typeOfMeal: ["обед"],
                    typeOfDish: "первое блюдо",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 8,
                    name: "Оливье",
                    img: olivieImg,
                    description: "Традиционный русский салат с колбасой, картофелем и майонезом.",
                    cuisine: "Русская",
                    difficulty: "новичок",
                    cookingTime: 30,
                    typeOfMeal: ["перекус"],
                    typeOfDish: "салат",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 9,
                    name: "Суши Калифорния",
                    img: kalifoniaImg,
                    description: "Роллы с крабом, авокадо и огурцом, обернутые икрой тобико.",
                    cuisine: "Японская",
                    difficulty: "любитель",
                    cookingTime: 50,
                    typeOfMeal: ["ужин"],
                    typeOfDish: "второе блюдо",
                    like: 0,
                    favourites: 0,
                    comment: [],
                },
                {
                    id: 10,
                    name: "Яйцо пашот",
                    img: pashotImg,
                    description: "Суть яйца пашот кроется в его названии. В переводе с французского, это 'ошпаренный кипятком'.",
                    cuisine: "Французская",
                    difficulty: "новичок",
                    cookingTime: 3,
                    typeOfMeal: ["завтрак"],
                    typeOfDish: "закуска",
                    like: 0,
                    favourites: 0,
                    comment: [],
                    // {
                    //     user: '',
                    //     text: '',
                    //     date: '',
                    // }
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
    created() {
        // Восстанавливаем текущий слайд при создании компонента
        const savedSlide = sessionStorage.getItem('currentSlide');
        if (savedSlide) this.currentSlide = JSON.parse(savedSlide);
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
        goToSlide(slideNumber) {
            this.currentSlide = slideNumber;
            sessionStorage.setItem('currentSlide', JSON.stringify(this.currentSlide));
        },
        openDishe(id){
            console.log(this.dishes[id-1])
        },
        openArticle(articleId) {
    // Здесь реализуйте логику открытия статьи
    console.log("Opening article:", articleId);
    // Например: переход на отдельную страницу статьи
    // или открытие модального окна с контентом
  },
        handleCategorySelected(category) {
            this.resetFilters();
            this.selectedFilters.typeOfDish = [category];
        }
    },
    computed: {
        sliderPosition() {
            return `translateX(-${(this.currentSlide - 1) * 0}%)`;
        },

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
    <header>
        <Header :currentSlide="currentSlide" @slide-changed="goToSlide" />
    </header>
    
    <body class="!bg-gray-50 !w-[100%] overflow-hidden">
        <div class="slides-container relative w-full overflow-hidden">
            <div class="flex w-[300%]"
                 :style="{ transform: sliderPosition }">
                <div class="slide w-1/3" v-show="currentSlide === 1" key="slide1">
                   <HomeSlide 
                        :dishes="dishes"
                        :availableTypeOfDish="availableTypeOfDish"
                        :goToSlide="goToSlide"
                        :openDishe="openDishe"
                        @category-selected="handleCategorySelected"
                    />
                </div>
                <div class="slide w-1/3" v-show="currentSlide === 2" key="slide2">
                    <div class="flex flex-col lg:flex-row gap-8 container !mx-auto !px-4 !py-8">
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
                        <div class="w-full lg:w-3/4" >
                            <SearchBar v-model="searchTerm"/>
                            <List v-bind:dishes="filteredDishes" :openDishe="openDishe"  @resetFilters="resetFilters"></List>
                        </div>
                    </div>
                </div>
                <div class="slide w-1/3" v-show="currentSlide === 3" key="slide3">
                    <div class="container !mx-auto !px-4 !py-8 text-gray-800">
                        <ArticlesSlide 
                            :goToSlide="goToSlide"
                            :openArticle="openArticle"
                        />
                    </div>
                </div>
            </div>
        </div>
    </body>

    <footer class="py-8 text-center text-gray-500">
        © 2025 Коллекция рецептов. Все права защищены.
    </footer>
</template>

<style scoped>
@media (max-width: 768px) {
  .slide {
    width: 100% !important;
  }
}
.active{
    color: #06D6A0;
    text-decoration-color: #06D6A0;
}

body .dialog-open {
  overflow: hidden;
}

</style>
