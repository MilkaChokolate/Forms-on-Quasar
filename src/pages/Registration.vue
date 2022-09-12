<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <p>Зарегестрируйтесь чтобы начать работать: </p>
        <form @submit.prevent="axiosRequest.registerUser(phoneNumber, email, password, userName)">
          <q-input
            type="email"
            :rules="authenticationStore.rulesForEmail"
            v-maska="authenticationStore.emailMask"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="email"
            label="Адрес электронной почты">
          </q-input>

          <q-input
            type="tel"
            :rules="authenticationStore.rulesForPhoneNumber"
            lazy-rules
            v-maska="authenticationStore.phoneNumberMask"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="phoneNumber"
            label="Номер телефона(не обязательно)">
          </q-input>

          <q-input
            type="text"
            lazy-rules
            :rules="authenticationStore.rulesForUserName"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="userName"
            label="Имя">
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
            label="Регистрация"
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
import axios from "axios";
import { useRouter } from 'vue-router'
import { useAuthenticationStore } from "../stores/authentication.js";
import { useAxiosRequestsStore } from "../stores/axiosRequest.js";
import { ref } from "vue";
import { maska } from "maska";

export default {
  name: "Registration",
  components: {
    FormBottomButton,
  },
  setup() {
    const authenticationStore = useAuthenticationStore();
    const axiosRequest = useAxiosRequestsStore();
    const email = ref('');
    const phoneNumber = ref('');
    const userName = ref('');
    const password = ref('');

    const router = useRouter()

    return { email, phoneNumber, userName, password, axiosRequest, authenticationStore }
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
