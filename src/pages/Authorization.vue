<template>
<div class="container">
    <FormHeader></FormHeader>
    <q-card class="my-card">
      <q-card-section>
        <p>Зарегестрируйтесь чтобы начать  работать: </p>
        <form @submit.prevent="register">
          <q-input
            type="text"
            :rules="[
             val => val.includes('@') || 'Пожалуйста, ввдите почту или телефон',
             val => !!val || 'Пожалуйста, введите почту или телефон'
            ]"
            lazy-rules
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="login"
            label="Телефон или email">
          </q-input>

          <q-input
            type="password"
            lazy-rules
            :rules="[
              val => val.length > 5 || 'Пароль не должно быть короче 6 символов',
              val => !!val || 'Пожалуйста, введит пароль'
            ]"
            bg-color="cyan-1"
            class="form-input"
            outlined
            v-model="password"
            label="Пароль">
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            label="Продолжить"
            class="full-width form-button"
          ></q-btn>
        </form>
        <hr/>
        <FormBottomButton></FormBottomButton>
      </q-card-section>
    </q-card>
    <ArlabsLogo></ArlabsLogo>
  </div>
</template>

<script>
import ArlabsLogo from "../components/ArlabsLogo.vue";
import FormBottomButton from "../components/FormBottomButton.vue";
import FormHeader from "../components/FormHeader.vue";

export default {
  name: "Authorization",
  components: {
    ArlabsLogo,
    FormBottomButton,
    FormHeader
  },
  data() {
    return {
      login: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>
