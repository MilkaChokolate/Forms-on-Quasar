<template>
  <q-page v-if="!successRegistered">
    <q-card class="my-card">
      <q-card-section>
        <p>Подтвердить регстрацию:</p>
        <form @submit.prevent="axiosRequest.verifyRegistration(this.$route.query.user, this.$route.params.code)">
          <q-btn
            type="submit"
            color="primary"
            label="Подтвердить"
            class="full-width form-button"
          ></q-btn>
        </form>
      </q-card-section>
    </q-card>
  </q-page>

  <q-page v-else>
    <q-card class="my-card">
      <q-card-section>
        <p>Вы успешно зарегистрировались</p>
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
import axios from "axios";
import {ref} from "vue";
import {useAxiosRequestsStore} from "../stores/axiosRequest.js";

export default {
  name: "VerifyOnEmail",
  components: {
  },
  setup() {
    const successRegistered = ref(false);
    const axiosRequest = useAxiosRequestsStore();

    return {successRegistered, axiosRequest}
  }
}
</script>

<style scoped>

</style>
