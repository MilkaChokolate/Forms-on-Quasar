<template>
<q-page>
    <q-card class="my-card">
      <q-card-section>
        <p>Мы отправили вам сообщение с подтверждением на почту.
          Пожалуйста, передите по ссылке на почте и подтвердите действие.</p>
        <hr/>
        <form-bottom-button></form-bottom-button>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import FormBottomButton from "../components/FormBottomButton.vue";

export default {
  name: "SentEmailMassage",
  components: {FormBottomButton}
}
</script>

<style scoped>

</style>
