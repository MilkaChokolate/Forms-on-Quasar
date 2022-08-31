<template>
  <q-container v-if="!successRegistered">
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
  </q-container>

  <div v-else class="container">
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
  </div>

</template>

<script>
import axios from "axios";


export default {
  name: "Verify",
  components: {
  },
  data() {
    return {
      code: '',
      userName: '',
      successRegistered: false
    }
  },
  methods: {
    verify() {
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
  }
}
</script>

<style scoped>

</style>
