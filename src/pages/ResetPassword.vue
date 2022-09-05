<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <h6>Возникли сложности со входом?</h6>
        <p>Мы отправим вам ссылку для воостановления</p>
        <form @submit.prevent="reset">
          <q-input
            type="text"
            v-model="email"
            :rules="authenticationStore.rulesForEmail"
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
import {useAuthenticationStore} from "../stores/authentication.js";
import {ref} from "vue";

export default {
  name: "ResetPassword",
  components: {
    FormBottomButton
  },
  setup() {
    const authenticationStore = useAuthenticationStore();
    const email = ref('');
    function reset(){

    }
    return {reset, email, authenticationStore}
  }
}
</script>

<style scoped>

</style>
