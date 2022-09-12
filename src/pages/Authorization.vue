<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <p>Войдите в свой аккаунт: </p>
        <form @submit.prevent="axiosRequest.login(login, password)">
          <q-input
            v-maska="authenticationStore.loginMask"
            type="text"
            v-model="login"
            :rules="authenticationStore.rulesForEmail"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            label="Телефон или email">
          </q-input>

          <q-input
            type="password"
            lazy-rules
            :rules="authenticationStore.rulesForPassword"
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

import { useAuthenticationStore } from "../stores/authentication";
import { useAxiosRequestsStore } from "../stores/axiosRequest.js";

import { ref } from 'vue'
import { maska } from 'maska'

export default {
  name: "Authorization",
  components: {
    FormBottomButton,
  },
  setup() {
    const authenticationStore = useAuthenticationStore();
    const axiosRequest = useAxiosRequestsStore();
    const login = ref('');
    const password = ref('');
    return {login, password, authenticationStore, axiosRequest}
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
