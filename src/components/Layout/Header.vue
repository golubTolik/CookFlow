<script>
import Dialog from '../UI/Dialog.vue';
import Login from '../Auth/Login.vue';
import logo from '@/components/icons/logo4.png';

export default {
  name: 'AppHeader',
  components: {
    Dialog,
    Login
  },
  data() {
    return {
      isMenuOpen: false,
      dialogVisible: false,
      logoPath: logo,
      navLinks: [
        { title: 'Главная', path: '/' },
        { title: 'Рецепты', path: '/recipes' },
        { title: 'Статьи', path: '/articles' }
      ],
      currentUser: null
    }
  },
  mounted() {
    // При загрузке компонента проверяем наличие авторизованного пользователя
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }

    window.addEventListener('show-auth-modal', this.openLoginDialog);
  },
  beforeDestroy() {
    // Убираем обработчик при уничтожении компонента
    window.removeEventListener('show-auth-modal', this.openLoginDialog);
  },
  methods: {
    openLoginDialog() {
      this.dialogVisible = true;
    },
    handleMobileClick() {
      this.isMenuOpen = false;
    },
    openLoginDialogMobile() {
      this.isMenuOpen = false;
      this.dialogVisible = true;
    },
    // Обработчик успешной авторизации
    handleLogin(user) {
      this.currentUser = user;
      this.dialogVisible = false;
    },
    // Метод выхода из системы
    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
      this.isMenuOpen = false;
      location.reload()
    }
  }
}
</script>

<template>
  <header class="items-center font-[Comfortaa]">
    <div class="container mx-auto flex flex-wrap justify-between items-center px-4 py-2">
      <router-link to="/" class="w-[120px] md:w-[150px] lg:w-[200px]">
        <img :src="logoPath" alt="Логотип" class="w-full">
      </router-link>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-700 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div class="hidden md:flex md:items-center md:space-x-4">
        <div class="controls" @selectstart.prevent>
          <router-link 
            v-for="(link, index) in navLinks" 
            :key="index"
            :to="link.path"
            class="cursor-pointer text-[20px] !mr-[10px] duration-200 underline decoration-[2px] underline-offset-[5px]"
            :class="{ 
              'active text-[#06D6A0]': $route.path === link.path,
              'text-[#929292]': $route.path !== link.path 
            }"
          >
            {{ link.title }}
          </router-link>
        </div>
      </div>

      <div class="hidden md:block">
        <div v-if="currentUser" class="flex items-center gap-4">
          <span class="text-gray-700">Привет, {{ currentUser.name }}!</span>
          <button @click="logout" 
                  class="px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Выйти
          </button>
        </div>

        <div v-else class="cursor-pointer text-xl !px-6 !py-1 border-1 border-[#06D6A0] duration-200 rounded-full capitalize text-black hover:bg-[#06D6A0] hover:-translate-y-1 hover:shadow-lg" @click="openLoginDialog">
          <p>Войти</p>
        </div>
      </div>
    </div>

    <!-- Мобильная версия -->
    <div v-if="isMenuOpen" class="md:hidden bg-white py-2 border-t">
      <div class="container mx-auto px-4 flex flex-col">
        <router-link 
          v-for="(link, index) in navLinks" 
          :key="index"
          :to="link.path"
          class="py-3 px-2 duration-200 border-b border-gray-100"
          :class="{ 
            'active text-[#06D6A0]': $route.path === link.path,
            'text-[#929292]': $route.path !== link.path 
          }"
          @click="isMenuOpen = false"
        >
          {{ link.title }}
        </router-link>

        <div v-if="currentUser" class="py-3 px-2 flex flex-col gap-2">
          <span class="text-gray-700">Привет, {{ currentUser.name }}!</span>
          <button @click="logout" 
                  class="w-full py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Выйти
          </button>
        </div>
        <div v-else class="cursor-pointer text-lg px-6 py-3 !mt-2 border border-[#06D6A0] duration-200 rounded-full capitalize text-black text-center hover:bg-[#06D6A0]" @click="openLoginDialogMobile">
          <p>Войти</p>
        </div>
      </div>
    </div>

    <Dialog v-model:show="dialogVisible">
      <Login v-model:show="dialogVisible" @login="handleLogin"/>
    </Dialog>
  </header>
</template>

<style scoped>
.active {
  color: #06D6A0;
  text-decoration-color: #06D6A0;
}
</style>