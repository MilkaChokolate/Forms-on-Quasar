import authInstance from "../axios/authInstance.js";
import { Notify } from 'quasar'


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
      Notify.create({
        message: error.response.data.message,
        position: 'center',
        multiLine: true,
        type: 'negative',
      })
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
      Notify.create({
        message: error.response.data.message,
        position: 'center',
        multiLine: true,
        type: 'negative',
      })
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
       Notify.create({
        message: error.response.data.message,
        position: 'center',
        multiLine: true,
        type: 'negative',
      })
     });
  }

  export function logIn(login, password){
    authInstance.post('login',{
      "login": login,
      "password": password
    })
     .then((response) => {
       Notify.create({
        message: 'Вы вошли',
        position: 'top',
        multiLine: true,
        type: 'info',
      })
       localStorage.setItem('JWTtoken', response.data.token);
     })
     .catch((error) => {
       Notify.create({
        message: error.response.data.message,
        position: 'center',
        multiLine: true,
        type: 'negative',
      })
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
       Notify.create({
        message: error.response.data.message,
        position: 'center',
        multiLine: true,
        type: 'negative',
      })
     });
  }
