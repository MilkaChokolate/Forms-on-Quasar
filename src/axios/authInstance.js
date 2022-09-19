import axios from 'axios'

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    Accept: 'application/json'
  }
});

export default authInstance
