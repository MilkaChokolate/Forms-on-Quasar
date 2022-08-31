<template>
  <q-layout view="hhh lpR fff">

    <q-header class="bg-white q-mt-md">
      <q-toolbar class="column">
        <h4 class="col-3 text-weight-regular no-margin text-black">FixPhoto</h4>
        <p class="col-3 text-weight-regular text-body1 q-mb-xl text-grey-6">Система фотофиксации, контроля и исполнения</p>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-white">
      <q-toolbar class="column">
        <hr>
        <img src="../assets/ArlabsLogo.png">
        <p class="text-subtitle2 text-grey-6">Реализация программных решений для бизнеса</p>
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
