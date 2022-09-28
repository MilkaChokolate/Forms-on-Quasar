<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <h6>Забыли пароль или хотите сменить его?</h6>
        <p>Мы отправим вам ссылку для воостановления</p>
        <form @submit.prevent="onSubmit">
          <q-input
            type="text"
            ref="emailRef"
            v-model="email"
            :rules="rulesForEmail"
            v-maska="emailMask"
            lazy-rules
            bg-color="cyan-1"
            class="q-mb-sm"
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
    const emailRef = ref(null);
    function onSubmit() {
      emailRef.value.validate();
      if (!emailRef.value.hasError) {
        resetPassword(email)
      }
    }

    return { onSubmit, email, emailRef, rulesForEmail, emailMask }
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
