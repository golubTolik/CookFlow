<script>
export default {
  data() {
    return {
      user: {
        name: "",
        login: "",
        password: "",
      },
      check: true,
    }
  },
  methods: {
    authorization() {
    //   this.user.id = Date.now();
    //   this.$emit('login',this.user);
    //   this.user = {
    //     login: "",
    //     password: "",
    //   }
    // this.$emit('update:show', false)
    },
    registration(){
        // this.user.id = Date.now();
        // this.$emit('registr',this.user);
        // this.user = {
        //     neme: "",
        //     login: "",
        //     password: "",
        // }
        this.check = !this.check
    }
  }
}
</script>

<template>
<div class="form">
    <form class="flex justify-center flex-col" @submit.prevent @click.stop>
        <div v-if="check">
            <strong class="text-gray-700 !mb-1 border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center">Введите логин:</strong>
            <input type="text" class="!mb-2 w-full rounded-[20px] px-[15px] py-[10px] border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-opacity-30 transition" placeholder="Введите логин" v-model="user.login">
            <strong class="text-gray-700 !mb-1 border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center">Введите пароль:</strong>
            <input type="text" class="!mb-2 w-full rounded-[20px] px-[15px] py-[10px] border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-opacity-30 transition" placeholder="Введите пароль" v-model="user.password">
            <div class="!mt-[5px] cursor-pointer text-xl !px-6 !py-1 border-1 bg-[#06D6A0] border-[#06D6A0] duration-200 rounded-full capitalize text-black hover:bg-white text-center " @click="$emit('update:show', false)"><button  >Авторизация</button></div>
        </div>
        <div v-else> 
            <strong class="text-gray-700 !mb-1 border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center">Введите имя:</strong>
            <input type="text" class="!mb-2 w-full rounded-[20px] px-[15px] py-[10px] border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-opacity-30 transition" placeholder="Введите логин" v-model="user.name">
            <strong class="text-gray-700 !mb-1 border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center">Введите логин:</strong>
            <input type="text" class="!mb-2 w-full rounded-[20px] px-[15px] py-[10px] border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-opacity-30 transition" placeholder="Введите логин" v-model="user.login">
            <strong class="text-gray-700 !mb-1 border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center">Введите пароль:</strong>
            <input type="text" class="!mb-2 w-full rounded-[20px] px-[15px] py-[10px] border-2 border-[#06D6A0] bg-opacity-20 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-0 focus:bg-opacity-30 transition" placeholder="Введите пароль" v-model="user.password">
        </div>
        <div class="!mt-[5px] cursor-pointer text-xl !px-6 !py-1 border-1 bg-[#06D6A0] border-[#06D6A0] duration-200 rounded-full capitalize text-black hover:bg-white text-center "><button  @click="registration">Регистрация</button></div>
    </form>
</div>
</template>

<style scoped>

</style>