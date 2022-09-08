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
          alert('Вам на почту отправили письмо с подтверждением')
        })
        .catch((error) => {
          if (error.response.status == '422') {
            alert('Такой пользователь уже есть')
            //this.userExist = true;
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
          alert('Мы отправили сообщение вам на почту')
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
         alert('Вы успешно зпрегистрированы')
          //this.successRegistered = true;
       })
       .catch((error) => {
         alert("Произошла ошибка")
       });
    }
  }
})
