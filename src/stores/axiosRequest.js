import { defineStore } from 'pinia'
import axios from "axios";

export const useAxiosRequestsStore = defineStore({
  id: 'axiosRequestsStore',
  state: () => ({

  }),
  actions: {
    registerUser(phoneNumber, email, password, userName) {
      axios.post(import.meta.env.VITE_REGISTER_URL, {
        "phone": phoneNumber,
        "email": email,
        "password": password,
        "username": userName
        })
        .then((response) => {
          this.$router.push({ name: 'sent-massage-on-email'})
        })
        .catch((error) => {
          if (error.response.status === 422) {
            alert('Такой пользователь уже есть')
          } else {
            alert('Произошла ошибка, попробуйте еще раз позже')
          }
        });
    },

    resetPassword(email) {
      axios.post(import.meta.env.VITE_RESET_URL, {
        "email": email
      })
        .then((response) => {
          this.$router.push({ name: 'sent-massage-on-email'})
        })
        .catch((error) => {
          alert('Произошла ошибка, попробуйте еще раз позже')
        });
    },

    verifyRegistration(userName, code) {
      axios.post(import.meta.env.VITE_VERIFY_URL,{
        "username": userName,
        "code": code
      })
       .then((response) => {
         this.$router.push({ name: 'success-message'})
       })
       .catch((error) => {
         alert("Произошла ошибка")
       });
    },

    login(login, password){
      axios.post(import.meta.env.VITE_LOGIN_URL,{
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
    },

    change(userName, code, password) {
      axios.post(import.meta.env.VITE_CHANGE_URL,{
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
  }
})
