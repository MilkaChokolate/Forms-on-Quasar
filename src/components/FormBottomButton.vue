<template>
<div class="hrefs">
  <a href="#">Не удается войти в систему?</a>
  <a href="#">Регистрация аккаунта</a>
</div>

</template>

<script>
export default {
  name: "FormBottomButton"
}
</script>

<style scoped>
.hrefs {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.hrefs a {
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  max-width: 129px;
  font-size: 14px;
  color: #0052CC;
  text-align: center;
}
</style>
