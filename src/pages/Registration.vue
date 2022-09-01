<template>
  <q-page v-if="!userExist">
    <q-card class="my-card">
      <q-card-section>
        <p>Зарегестрируйтесь чтобы начать работать: </p>
        <form @submit.prevent="register">
          <q-input
            type="email"
            :rules="[
             val => val.includes('@') || 'Пожалуйста, ввдите почту',
             val => !!val || 'Пожалуйста, введите почту'
            ]"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="email"
            label="Адрес электронной почты">
          </q-input>

          <q-input
            type="tel"
            :rules="[ val => (val.match(/^(\+7)[0-9]{10}$/) || val.length === 0 ) || 'Пожалуйста, введите номер телефона' ]"
            lazy-rules
            mask="+7###########"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="phoneNumber"
            label="Номер телефона(не обязательно)">
          </q-input>

          <q-input
            type="text"
            lazy-rules
            :rules="[
              val => val.match(/^[a-zA-Z ]{0,255}$/) || 'Имя может содержать только латиницу',
              val => val.length <= 20 || 'Имя не должно быть длиннее 20 символов',
              val => !!val || 'Пожалуйста, введит имя'
            ]"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="userName"
            label="Имя">
          </q-input>

          <q-input
            type="password"
            lazy-rules
            :rules="[
              val => val.length > 5 || 'Пароль не должно быть короче 6 символов',
              val => !!val || 'Пожалуйста, введит пароль'
            ]"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="password"
            label="Пароль">
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            label="Регистрация"
            class="full-width form-button"
          ></q-btn>
        </form>
        <hr/>
        <form-bottom-button></form-bottom-button>
      </q-card-section>
    </q-card>
  </q-page>

  <q-page v-else>
    <q-card class="my-card">
      <q-card-section>
        <p>Такой пользователь уже существует</p>
          <q-btn
            color="primary"
            label="Перейти на страницу входа"
            class="full-width form-button"
            @click="this.$router.push({ name: 'authorization'})"
          ></q-btn>
          <q-btn
            color="primary"
            label="Попробовать зарегистрироваться еще раз"
            class="full-width form-button"
            @click="retryRegister"
          ></q-btn>
      </q-card-section>
    </q-card>
  </q-page>

</template>

<script>
import FormBottomButton from "../components/FormBottomButton.vue";
import axios from "axios";

export default {
  name: "Registration",
  components: {
    FormBottomButton,
  },
  data() {
    return {
      email: '',
      phoneNumber: '',
      userName: '',
      password: '',
      userExist: false
    }
  },
  methods: {
    register() {
      axios.post(import.meta.env.VITE_REGISTER_URL,{
        "phone": this.phoneNumber,
        "email": this.email,
        "password": this.password,
        "username": this.userName
      })
       .then((response) => {
          this.$router.push({ name: 'verify', params: { username: this.userName }})
       })
       .catch((error) => {
         if (error.response.status == '422') {
           this.userExist = true;
         } else {
           alert('Произошла ошибка, попробуйте еще раз позже')
         }
       });
    },
    retryRegister() {
      this.$router.push({ name: 'registration'});
      this.userExist = false;
    }
  }
}
</script>

<style scoped>

</style>
