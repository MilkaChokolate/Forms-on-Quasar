<script setup>

</script>

<template>
  <div class="app">
    <q-btn color="primary" label="Basic Menu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup :to="{ name: 'registration'}">
              <q-item-section>Регистрация</q-item-section>
            </q-item>
            <q-item clickable v-close-popup :to="{ name: 'authorization'}">
              <q-item-section>Авторизация</q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item clickable v-close-popup :to="{ name: 'reset-or-change'}" >
              <q-item-section>Смена и восстановление пароля</q-item-section>
            </q-item>
            <q-item clickable v-close-popup :to="{ name: 'change-on-email'}">
              <q-item-section>Подтверждение на почте</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <router-view></router-view>
</template>

<style scoped>

</style>
