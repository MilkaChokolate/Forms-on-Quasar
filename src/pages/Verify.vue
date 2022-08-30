<template>
  <div v-if="!successRegistered" class="container">
    <form-header></form-header>
    <q-card class="my-card">
      <q-card-section>
        <h6>Подтвердите регистрацию:</h6>
        <p>Мы отправили код вам на почту</p>
        <form @submit.prevent="verify">

          <q-input
            type="text"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="code"
            label="Код">
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            label="Подтвердить"
            class="full-width form-button"
          ></q-btn>
        </form>
      </q-card-section>
    </q-card>
    <ArlabsLogo></ArlabsLogo>
  </div>

  <div v-else class="container">
    <form-header></form-header>
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
    <arlabs-logo></arlabs-logo>
  </div>

</template>

<script>
import ArlabsLogo from "../components/ArlabsLogo.vue";
import FormHeader from "../components/FormHeader.vue";
import axios from "axios";

export default {
  name: "Verify",
  components: {
    ArlabsLogo,
    FormHeader
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
      axios.post('https://photo.dedos.ru/api/authentication/verify',{
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
h6 {
  margin: 0;
}
</style>
