<script>
export default {
  data() {
    return {
      user: {
        name: "",
        login: "",
        password: "",
        likedRecipes: [],
        favoriteRecipes: [],
        likedArticles: [],
        favoriteArticles: []
      },
      check: true,
      errorMessage: "",
      currentUser: null,
    }
  },
  methods: {
    authorization() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.login === this.user.login && u.password === this.user.password);
      
      if (user) {
        this.errorMessage = "";
        this.currentUser = {
          id: user.id,
          name: user.name,
          login: user.login,
          likedRecipes: user.likedRecipes,
          favoriteRecipes: user.favoriteRecipes,
          likedArticles: user.likedArticles,
          favoriteArticles: user.favoriteArticles
        };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        
        this.$emit('login', this.currentUser);
        this.$emit('update:show', false)
        location.reload()
      } else {
        this.errorMessage = "Неверный логин или пароль";
      }
    },
    registration() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      if (users.some(u => u.login === this.user.login)) {
        this.errorMessage = "Пользователь с таким логином уже существует";
        return;
      }
      
      const newUser = {
        id: Date.now(),
        ...this.user
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      this.currentUser = {
        id: newUser.id,
        name: newUser.name,
        login: newUser.login,
        likedRecipes: newUser.likedRecipes,
        favoriteRecipes: newUser.favoriteRecipes,
        likedArticles: newUser.likedArticles,
        favoriteArticles: newUser.favoriteArticles
      };
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

      
      this.$emit('login', this.currentUser);
      this.$emit('update:show', false)
      location.reload()
    },
  }
}
</script>

<template>
<div class="form">
    <form class="flex justify-center flex-col" @submit.prevent @click.stop>
        <div v-if="errorMessage" class="text-red-500 !mb-4 p-2 bg-red-50 rounded-lg">
          {{ errorMessage }}
        </div>
        <div v-if="check">
            <strong class="text-gray-700 !mb-1 border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center">Введите логин:</strong>
            <input type="text" 
              class="!mb-2 w-full rounded-[20px] px-[15px] py-[10px] border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-opacity-30 transition" 
              placeholder="Введите логин" 
              v-model="user.login">
            
            <strong class="text-gray-700 !mb-1 border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center">Введите пароль:</strong>
            <input type="password" 
              class="!mb-2 w-full rounded-[20px] px-[15px] py-[10px] border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-opacity-30 transition" 
              placeholder="Введите пароль" 
              v-model="user.password">

            <div class="!mt-3 cursor-pointer text-white !px-6 !py-2 border-2 bg-[#06D6A0] border-[#06D6A0] duration-200 rounded-full capitalize hover:text-[#06D6A0] hover:bg-white text-center " 
              @click="authorization"><button  >Авторизация</button></div>

            <div class="!mt-4 text-center text-gray-500">
              Нет аккаунта? 
              <a href="#" @click.prevent="check = false" class="text-[#06D6A0]">Зарегистрируйтесь</a>
            </div>
        </div>
        <div v-else>
            <strong class="block text-gray-700 !mb-1 font-[Comfortaa]">Введите имя:</strong>
            <input type="text" 
              class="!mb-3 w-full rounded-[20px] text-gray-800 px-4 py-2 border-2 border-[#06D6A0] placeholder-gray-400"
              placeholder="Ваше имя" 
              v-model="user.name">
            
            <strong class="block text-gray-700 !mb-1 font-[Comfortaa]">Введите логин:</strong>
            <input type="text" 
              class="!mb-3 w-full rounded-[20px] text-gray-800 px-4 py-2 border-2 border-[#06D6A0] placeholder-gray-400"
              placeholder="Ваш логин" 
              v-model="user.login">
            
            <strong class="block text-gray-700 !mb-1 font-[Comfortaa]">Введите пароль:</strong>
            <input type="password" 
              class="!mb-4 w-full rounded-[20px] text-gray-800 px-4 py-2 border-2 border-[#06D6A0] placeholder-gray-400"
              placeholder="Ваш пароль" 
              v-model="user.password">
            
            <button @click="registration" 
              class="w-full py-2 border-2 bg-[#06D6A0] border-[#06D6A0] text-white rounded-full hover:text-[#06D6A0] hover:bg-white transition">
              Зарегистрироваться
            </button>
            
            <div class="!mt-4 text-center text-gray-500">
              Уже есть аккаунт? 
              <a href="#" @click.prevent="check = true" class="text-[#06D6A0] font-bold">Войти</a>
            </div>
        </div>
    </form>
</div>
</template>

<style scoped>

</style>