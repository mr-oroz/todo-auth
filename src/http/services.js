import instance from "./settings";

const register = (data) => {
  return instance.post('/auth/users', data)
}

const login = (data) => {
  return instance.post('/auth/token/login', data)
}

const getMe = () => {
  return instance.get('/auth/users/me')
}

export const services = {
  register,
  login,
  getMe
}