<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <p>Вы успешно зарегистрированы.</p>
        <p>Перейти к работе:</p>
        <q-btn
            color="primary"
            label="Войти в аккаунт"
            class="full-width form-button"
            :to="{ name: 'authorization'}"
        ></q-btn>
      </q-card-section>
    </q-card>
  </q-page>

</template>x

<script>

import { ref, onMounted } from "vue";
import { verifyRegistration } from '../composables/authenticationRequests.js'

export default {
  name: "VerifyOnEmail",
  components: {
  },
  setup() {
    const successRegistered = ref(false);
    onMounted(() => {
      verifyRegistration(this.$route.query.user, this.$route.params.code)
    })

    return {successRegistered}
  }
}
</script>

<style scoped>

</style>
