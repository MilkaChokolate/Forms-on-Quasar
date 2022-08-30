<template>
  <q-layout view="hHh lpR fFf">

    <q-header>
      <q-toolbar class="column">
        <h1 class="col-3">FixPhoto</h1>
        <p class="col">Система фотофиксации, контроля и исполнения</p>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-toolbar class="column">
        <hr>
        <img src="../assets/ArlabsLogo.png">
        <p>Реализация программных решений для бизнеса</p>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: "AuthenticationLayout"
}
</script>

<style scoped>

</style>
