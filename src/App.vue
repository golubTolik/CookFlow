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
    <header class="">

    </header>
    <body class="!bg-gray-50">
        <List  v-bind:recipes="dishes"></List>
    </body>
    <footer class="">

    </footer>
</template>

<style scoped>

</style>
