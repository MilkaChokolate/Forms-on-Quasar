<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <h6>Забыли пароль или хотите сменить его?</h6>
        <p>Мы отправим вам ссылку для воостановления</p>
        <form @submit.prevent="resetPassword(email)">
          <q-input
            type="text"
            v-model="email"
            :rules="rulesForEmail"
            v-maska="emailMask"
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
import { rulesForEmail, emailMask } from "../composables/validationAndRules.js";
import { ref } from "vue";
import { maska } from "maska";
import { resetPassword } from "../composables/authenticationRequests.js"

export default {
  name: "ResetOrChangePassword",
  components: {
    FormBottomButton
  },
  setup() {
    const email = ref('');

    return { resetPassword, email, rulesForEmail, emailMask }
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
