<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <h6>Забыли пароль или хотите сменить его?</h6>
        <p>Мы отправим вам ссылку для воостановления</p>
        <form @submit.prevent="axiosRequest.resetPassword(email)">
          <q-input
            type="text"
            v-model="email"
            :rules="authenticationStore.rulesForEmail"
            v-maska="authenticationStore.emailMask"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            label="Адрес электронной почты">
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            label="Отправить ссылку для восстановления"
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
import { useAuthenticationStore } from "../stores/authentication.js";
import { ref } from "vue";
import { maska } from "maska";
import axios from "axios";
import {useAxiosRequestsStore} from "../stores/axiosRequest.js";

export default {
  name: "ResetOrChangePassword",
  components: {
    FormBottomButton
  },
  setup() {
    const authenticationStore = useAuthenticationStore();
    const axiosRequest = useAxiosRequestsStore();
    const email = ref('');

    function reset() {
      axios.post(import.meta.env.VITE_RESET_URL, {
        "email": email.value
      })
        .then((response) => {
          alert('Мы отправили сообщение вам на почту')
        })
        .catch((error) => {
          alert('Произошла ошибка, попробуйте еще раз позже')
        });
    }
    return {reset, email, authenticationStore, axiosRequest}
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
