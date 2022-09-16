<template>
  <q-page>
    <q-card v-if="successReset" class="my-card">
      <q-card-section>
        <p>Введите новый пароль: </p>
        <form @submit.prevent="change(this.$route.params.code, this.$route.query.user, password)">

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
            label="Сменить пароль"
            class="full-width form-button"
          ></q-btn>
        </form>
        <hr/>
        <form-bottom-button></form-bottom-button>
      </q-card-section>
    </q-card>

    <q-card v-else class="my-card">
      <q-card-section>
        <p>Вы успешно сменили пароль</p>
          <q-btn
            color="primary"
            label="Перейти на страницу входа"
            class="full-width form-button"
            @click="this.$router.push({ name: 'authorization'})"
          ></q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import FormBottomButton from "../components/FormBottomButton.vue";
import { rulesForPassword } from "../composables/validationAndRules.js";
import { ref } from "vue";
import { maska } from "maska";
import { change } from '../composables/authenticationRequests.js'

export default {
  name: "ResetPasswordOnEmail",
  components: {
    FormBottomButton
  },
  setup() {
    const password = ref('');
    const successReset = ref('false');
    return { password, successReset, rulesForPassword, change }
  },
  directives: { maska }
}
</script>

<style scoped>

</style>
