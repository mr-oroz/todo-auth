import React, {useState} from 'react';
import MyButton from '../../components/MyButton';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
const defultState = {
  username: '',
  phone_number: '',
  password: ''
}

const Register = ({registerPost}) => {

  const [form, setForm] = useState(defultState)
  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const hanlderSubmit = async (e) => {
    e.preventDefault()
    await registerPost({...form})
    setForm(defultState)
  }
  return (
    <form  onSubmit={hanlderSubmit} className='auth'>
      <TextField
        onChange={handlerChange}
        value={form.username}
        name={'username'}
        id="outlined-basic"
        label="username" variant="outlined" />
      <TextField
        onChange={handlerChange}
        value={form.phone_number}
        name={'phone_number'}
        id="outlined-basic"
        label="email"
        variant="outlined" />
      <TextField
        onChange={handlerChange}
        value={form.password}
        name='password'
        id="outlined-basic"
        type="password"
        label="password" variant="outlined" />
      <MyButton color="#ff5252" type="submit">Register</MyButton>
      <Link to='/auth/login'>sign in</Link>
    </form>
  );
};

export default Register;