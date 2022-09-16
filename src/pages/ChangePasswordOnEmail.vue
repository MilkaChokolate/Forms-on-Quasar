<template>
<q-page>
    <q-card  class="my-card">
      <q-card-section>
        <p>Введите новый пароль: </p>
        <form @submit.prevent="change(this.$route.params.code, this.$route.query.user, password)">

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
            label="Сменить пароль"
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

import { change } from '../composables/authentication.js'
import { useAuthenticationStore } from "../stores/authentication.js";
import { ref } from "vue";

export default {
  name: "ChangePasswordOnEmail",
  components: {
    FormBottomButton
  },
  setup() {
    const password = ref('');
    const authenticationStore = useAuthenticationStore();
    return { password, authenticationStore, change }
  }
}
</script>

<style scoped>

</style>
