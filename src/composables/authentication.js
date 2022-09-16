import authInstance from "../axios/authInstance.js";


  export function registerUser(phoneNumber, email, password, userName) {
    authInstance.post('register', {
      "phone": phoneNumber,
      "email": email,
      "password": password,
      "username": userName
    })
    .then((response) => {
      this.$router.push({name: 'sent-massage-on-email'})
    })
    .catch((error) => {
      if (error.response.status === 422) {
        alert('Такой пользователь уже есть')
      } else {
        alert('Произошла ошибка, попробуйте еще раз позже')
      }
    });
  }

  export function resetPassword(email) {
    authInstance.post('reset', {
      "email": email
    })
    .then((response) => {
      this.$router.push({ name: 'sent-massage-on-email'})
    })
    .catch((error) => {
      alert('Произошла ошибка, попробуйте еще раз позже')
    });
  }

  export function verifyRegistration(userName, code) {
    authInstance.post('verify',{
      "username": userName,
      "code": code
    })
     .then((response) => {
       this.$router.push({ name: 'success-message'})
     })
     .catch((error) => {
       alert("Произошла ошибка")
     });
  }

  export function logIn(login, password){
    authInstance.post('login',{
      "login": login,
      "password": password
    })
     .then((response) => {
       alert('Вы вошли');
       localStorage.setItem('JWTtoken', response.data.token);
     })
     .catch((error) => {
       alert("Произошла ошибка")
     });
  }

  export function change(userName, code, password) {
    authInstance().post('change',{
      "code": code,
      "username": userName,
      "password": password
    })
     .then((response) => {
       this.$router.push({ name: 'success-message'})
     })
     .catch((error) => {
       alert("Произошла ошибка")
     });
  }
