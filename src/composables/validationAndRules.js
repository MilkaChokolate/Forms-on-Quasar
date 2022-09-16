export const rulesForEmail = [
      val => val.includes('@') || 'Пожалуйста, ввдите электронную почту',
      val => !!val || 'Пожалуйста, введите электронную почту'
    ];
export const rulesForPhoneNumber = [
      val => (val.match(/^(\+7)[0-9]{10}$/) || val.length === 0 ) || 'Пожалуйста, введите номер телефона'
    ];
export const rulesForUserName = [
      val => val.match(/^[a-zA-Z ]{0,255}$/) || 'Имя может содержать только латиницу',
      val => val.length <= 20 || 'Имя не должно быть длиннее 20 символов',
      val => !!val || 'Пожалуйста, введите имя'
    ];
export const rulesForPassword = [
      val => val.length > 5 || 'Пароль не должно быть короче 6 символов',
      val => !!val || 'Пожалуйста, введите пароль'
    ];
export const loginMask = {mask: ['H*!@H*.H*', '+7##########'], tokens: { 'H': { pattern: /./}}};
export const emailMask = {mask: 'H*!@H*.H*', tokens: { 'H': { pattern: /./}}};
export const phoneNumberMask = "+7##########";
export const userNameMask = 'S*';
