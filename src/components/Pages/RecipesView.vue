<script>
import FiltersPanel from '@/components/UIcomponents/FiltersPanel.vue';
import SearchBar from '@/components/UIcomponents/SearchBar.vue';
import List from '@/components/UIcomponents/List.vue';

export default {
  props: ['dishes'],
  components: { FiltersPanel, SearchBar, List },
  data() {
    return {
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
    };
  },
  computed: {
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
  },
  methods: {
    resetFilters() {
      this.selectedFilters = {
        cuisine: [],
        difficulty: [],
        cookingTime: [],
        typeOfMeal: [],
        typeOfDish: [],
      };
      this.searchTerm = '';
    },
    openDishe(id){
      this.$router.push(`/recipe/${id}`);
    }
  },
  created() {
    if (this.$route.query.category) {
      this.selectedFilters.typeOfDish = [this.$route.query.category];
    }
  },
};
</script>

<template>
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
    <div class="w-full lg:w-3/4">
      <SearchBar v-model="searchTerm"/>
      <List :dishes="filteredDishes" :openDishe="openDishe" @resetFilters="resetFilters"/>
    </div>
  </div>
</template>