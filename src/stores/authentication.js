import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore({
  id: 'authenticationStore',
  state: () => ({
    token: localStorage.getItem('JWTtoken'),
    rulesForEmail: [
      val => val.includes('@') || 'Пожалуйста, ввдите электронную почту',
      val => !!val || 'Пожалуйста, введите электронную почту'
    ],
    rulesForPhoneNumber: [
      val => (val.match(/^(\+7)[0-9]{10}$/) || val.length === 0 ) || 'Пожалуйста, введите номер телефона'
    ],
    rulesForUserName: [
      val => val.match(/^[a-zA-Z ]{0,255}$/) || 'Имя может содержать только латиницу',
      val => val.length <= 20 || 'Имя не должно быть длиннее 20 символов',
      val => !!val || 'Пожалуйста, введите имя'
    ],
    rulesForPassword: [
      val => val.length > 5 || 'Пароль не должно быть короче 6 символов',
      val => !!val || 'Пожалуйста, введите пароль'
    ],
    loginMask: {mask: ['H*!@H*.H*', '+7##########'], tokens: { 'H': { pattern: /./}}},
    emailMask: {mask: 'H*!@H*.H*', tokens: { 'H': { pattern: /./}}},
    phoneNumberMask: "+7##########",
    userNameMask: 'S*'
  })
})
