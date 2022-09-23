<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <p>Зарегестрируйтесь чтобы начать работать: </p>
        <form @submit.prevent="registerUser(phoneNumber, email, password, userName)">
          <q-input
            type="email"
            :rules="rulesForEmail"
            v-maska="emailMask"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="email"
            label="Адрес электронной почты">
          </q-input>

          <q-input
            type="tel"
            :rules="rulesForPhoneNumber"
            lazy-rules
            v-maska="phoneNumberMask"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="phoneNumber"
            label="Номер телефона">
          </q-input>

          <q-input
            type="text"
            lazy-rules
            :rules="rulesForUserName"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="userName"
            label="Имя">
          </q-input>

          <q-input
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
import { phoneNumberMask, rulesForPhoneNumber, rulesForUserName, rulesForEmail, emailMask, rulesForPassword } from "../composables/validationAndRules.js";
import { ref } from "vue";
import { maska } from "maska";
import { registerUser } from '../composables/authenticationRequests.js'

export default {
  name: "Registration",
  components: {
    FormBottomButton,
  },
  setup() {
    const email = ref('');
    const phoneNumber = ref('');
    const userName = ref('');
    const password = ref('');

    return {
      email,
      phoneNumber,
      userName,
      password,
      registerUser,
      phoneNumberMask,
      rulesForUserName,
      rulesForPhoneNumber,
      rulesForPassword,
      rulesForEmail,
      emailMask,
    }
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
