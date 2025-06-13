<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        body: "",
        email: "",
      }

    }
  },
  methods: {
    addComment() {
      this.comment.id = Date.now();
      this.$emit('create',this.comment);
      this.comment = {
        name: "",
        body: "",
        email: "",
      }
    }
  }
}
</script>

<template>
<div class="form">
    <form @submit.prevent @click.stop>
        <strong>Введите логин:</strong>
        <input type="text" class="input" placeholder="Введите логин" v-model="login">
        <strong>Введите пароль:</strong>
        <input type="text" class="input" placeholder="Введите пароль" v-model="password">
        <div class="btn-form  btn-down"><button  @click="avto">Авторизация</button></div>
    </form>
</div>
</template>

<style scoped>
form{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
input{
  width: 100%;
  border: 1px solid cadetblue;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn{
  margin-top: 15px;
  align-self: center;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid cadetblue;
  transition: .6s;
}
.btn:hover{
  background: teal;
  color: white;
  border: 1px solid white;
  transition: .3s;
}

</style>