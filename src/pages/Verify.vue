<template>
  <q-page v-if="!successRegistered">
    <q-card class="my-card">
      <q-card-section>
        <p>Подтверлить регстрацию:</p>
        <form @submit.prevent="verify">
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

export default {
  name: "Verify",
  components: {
  },
  setup() {
    const successRegistered = ref(false);
    function verify() {
      axios.post(import.meta.env.VITE_VERIFY_URL,{
        "username": this.$route.query.user,
        "code": this.$route.params.code
      })
       .then((response) => {
          this.successRegistered = true;
       })
       .catch((error) => {
         alert("Произошла ошибка")
       });
    }

    return {verify}
  }
}
</script>

<style scoped>

</style>
