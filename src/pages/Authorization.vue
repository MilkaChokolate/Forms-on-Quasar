<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <p>Войдите в свой аккаунт: </p>
        <form @submit.prevent="logIn(login, password)">
          <q-input
            q-my-xl
            v-maska="loginMask"
            type="text"
            v-model="login"
            :rules="rulesForLogin"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            label="Телефон или email">
          </q-input>

          <q-input
            q-py-xl
            type="password"
            lazy-rules
            :rules="rulesForPassword"
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
  </q-page>
</template>

<script>
import FormBottomButton from "../components/FormBottomButton.vue";

import { logIn } from '../composables/authenticationRequests.js'
import { loginMask, rulesForLogin, rulesForPassword } from "../composables/validationAndRules.js";
import { ref } from 'vue'
import { maska } from 'maska'

export default {
  name: "Authorization",
  components: {
    FormBottomButton,
  },
  setup() {
    const login = ref('');
    const password = ref('');
    return {login, password, loginMask, rulesForPassword, rulesForLogin, logIn }
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
