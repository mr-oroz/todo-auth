import axios from "axios";

const instance = axios.create({
  baseURL: 'http://erdent001.pythonanywhere.com',
  headers: {
    'Content-Type': 'application/json'
  }
})


instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token-aut'));
  if (token) {
      config.headers.Authorization = `Token ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})



export default instance;