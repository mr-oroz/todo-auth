import React, {useState} from 'react';
import MyButton from '../../components/MyButton';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
const defultState = {
  username: '',
  password: ''
}

const Login = ({loginPost}) => {

  const [form, setForm] = useState(defultState)
  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const hanlderSubmit = async (e) => {
    e.preventDefault()
    await loginPost({...form})
    setForm(defultState)
  }
  return (
    <form  onSubmit={hanlderSubmit} className='auth'>
      <TextField
        onChange={handlerChange}
        value={form.username}
        name={'username'}
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
      <MyButton color="#ff5252" type="submit">Login</MyButton>
      <Link to='/auth/register'>register</Link>
    </form>
  );
};

export default Login;