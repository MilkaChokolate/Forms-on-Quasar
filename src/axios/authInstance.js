import axios from 'axios'

const authInstance = axios.create({
  baseURL: 'https://photo.dedos.ru/api/authentication/',
  headers: {
    Accept: 'application/json'
  }
});

export default authInstance
