<script>
import Header from './components/UIcomponents/Header.vue';
import hachImg from '@/components/icons/Hachapuri-po-adjarski-500x350-1000x667.jpeg';
import borshImg from '@/components/icons/borsh.jpg'
import macarraoImg from '@/components/icons/macarrao-com-presunto.jpeg'
import plovImg from '@/components/icons/plov.jpg'
import cezarImg from '@/components/icons/cezar.jpg'
import rattatyiImg from '@/components/icons/rattatyi.jpg'
import tomYmImg from '@/components/icons/tomYm.png'
import olivieImg from '@/components/icons/olivie.jpg'
import kalifoniaImg from '@/components/icons/kalifonia.jpg'
import pashotImg from '@/components/icons/pashot.jpg'

export default {
  components: { Header },
  data() {
    return {
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
    };
  },
};
</script>

<template>
  <Header />
  <router-view :dishes="dishes" />
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
body .dialog-open {
  overflow: hidden;
}
</style>