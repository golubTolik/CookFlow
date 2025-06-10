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
            ]
        }
    }
}
</script>

<template>
    <header class="flex justify-between !mb-10">
        <div><img src="" alt=""></div>
        <!-- <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-0">🍳 Коллекция рецептов</h1> -->
        <div class="controls">
            <input checked type="radio" name="name" id="input1" class="hidden">
            <input type="radio" name="name" id="input2" class="hidden">
            <input type="radio" name="name" id="input3" class="hidden">
            <label for="input1" id="label1" class="text-[20px] text-[#929292] !mr-[10px] duration-300 underline decoration-[#929292] decoration-[2px] underline-offset-[5px]">Главная</label>
            <label for="input2" id="label2" class="text-[20px] text-[#929292] !mr-[10px] duration-300 underline decoration-[#929292] decoration-[2px] underline-offset-[5px]">Рецепты</label>
            <label for="input3" id="label3" class="text-[20px] text-[#929292] !mr-[10px] duration-300 underline decoration-[#929292] decoration-[2px] underline-offset-[5px]">Статьи</label>
        </div>
        <div><img src="./components/icons/user-solid 1.svg" alt=""></div>
    </header>
    <body class="!bg-gray-50 flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-1/4">
            <div class="bg-white rounded-xl shadow-md p-6 sticky top-4">
                <div class="flex justify-between items-center !mb-6">
                    <h2 class="text-xl !font-bold text-gray-800">Фильтры</h2>
                    <button class="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded-full transition">
                        Сбросить
                    </button>
                </div>
                        
                <!-- Фильтр по кухне -->
                <div class="!mb-6 filter-section">
                    <h3 class="font-bold text-gray-700 !mb-3 !pb-2 border-b">Кухня</h3>
                    <div class="space-y-2">
                        <div class="filter-option">
                            <label class="flex items-center cursor-pointer !py-1 !px-2 rounded">
                                <input type="checkbox" class="rounded text-orange-500 focus:ring-orange-500">
                                <span class="!ml-2 text-gray-600">Грузинская</span>
                            </label>
                        </div>
                    </div>
                </div>
                        
                <!-- Фильтр по сложности -->
                <div class="filter-section">
                    <h3 class="!font-bold text-gray-700 !mb-3 !pb-2 border-b">Сложность</h3>
                    <div class="space-y-2">
                        <div class="filter-option">
                            <label class="flex items-center cursor-pointer !py-1 !px-2 rounded">
                                <input type="checkbox" class="rounded text-orange-500 focus:ring-orange-500">
                                <span class="!ml-2 text-gray-600">Новичок</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-3/4">
            <List  v-bind:recipes="dishes"></List>
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
