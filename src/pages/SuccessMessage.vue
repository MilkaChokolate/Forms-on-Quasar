<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <p>Все прошло успешно.</p>
        <q-btn
            color="primary"
            label="Войти в аккаунт"
            class="full-width form-button"
            @click="this.$router.push({ name: 'authorization'})"
        ></q-btn>
        <hr/>
        <form-bottom-button></form-bottom-button>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import FormBottomButton from "../components/FormBottomButton.vue";

export default {
  name: "ChangedPasswordMassage",
  components: {FormBottomButton}
}
</script>

<style scoped>

</style>
