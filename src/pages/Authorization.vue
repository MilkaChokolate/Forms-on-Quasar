<template>
<q-container>
    <q-card class="my-card">
      <q-card-section>
        <p>Войдите в свой аккаунт: </p>
        <form @submit.prevent="register">
          <q-input
            type="text"
            v-model="login"
            :rules="[
             val => val.includes('@') || 'Пожалуйста, ввдите почту или телефон',
             val => !!val || 'Пожалуйста, введите почту или телефон'
            ]"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            label="Телефон или email">
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
            label="Продолжить"
            class="full-width form-button"
          ></q-btn>
        </form>
        <hr/>
        <form-bottom-button></form-bottom-button>
      </q-card-section>
    </q-card>
  </q-container>
</template>

<script>
import FormBottomButton from "../components/FormBottomButton.vue";
import AuthenticationLayout from "../layouts/AuthenticationLayout.vue";

//import useVuelidate from '@vuelidate/core'
//import {required, minLength, email, or} from '@vuelidate/validators'


export default {
  name: "Authorization",
  components: {
    AuthenticationLayout,
    FormBottomButton,
  },
  data() {
    return {
      login: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>
