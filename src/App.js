import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';
import { ToastContainer, toast } from 'react-toastify';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import { Routes, Route, Navigate } from 'react-router-dom'
import { services } from './http/services';
const App = () => {
  const [value, setValue] = useState('all');
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    filterTodos()
  }, [todos])


  useEffect(() => {
    const load = async () => {
      const res = await services.getMe()
      console.log(res)
      setUser(res.data)
    }
    load()
  }, [])
  const registerPost = async (data) => {
    try {
      const response = await services.register(data)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  const loginPost = async (data) => {
    try {
      const response = await services.login(data)
      console.log(response)
      localStorage.setItem('token-aut', JSON.stringify(response.data.auth_token))
      await services.getMe()
    } catch (e) {
      console.log(e)
    }
  }
  const addTodo = (value) => {
    const newItem = {
      id: Date.now(),
      title: value,
      comleted: false
    }
    toast.error('успешно добавлено')
    const newArr = [...todos, newItem]
    setTodos(newArr)
  }

  function filterTodos() {
    const activeTodo = todos.filter(elem => elem.comleted === false)
    const comletedTodo = todos.filter(elem => elem.comleted === true)
    setTodos([...activeTodo, ...comletedTodo])
  }

  const changeCompleted = (id) => {
    const newArr = todos.map(item => item.id === id ? { ...item, comleted: !item.comleted } : item)
    setTodos(newArr)
  }
  const deleteItem = (id) => {
    const newArr = todos.filter(item => item.id !== id)
    setTodos(newArr)
    toast.warning('успешно уделено')
  }
  return (
    <div className='App'>
      {/* <Header
            todos={todos}
            value={value}
            setValue={setValue} />
          <AddTodo addTodo={addTodo} />
          <List
            value={value}
            changeCompleted={changeCompleted}
            deleteItem={deleteItem}
            todos={todos} />
          <ToastContainer position='bottom-left' />
        </> */}
      <Routes>
        <Route path="/" element={user.username ? <h1>Home</h1> : <Register />} />
      <Route exact path="/auth/login" element={user.username ? <Navigate to="/" replace /> : <Login loginPost={loginPost} />} />
        <Route exact path="/auth/register" element={user.username ? <Navigate to="/" replace /> : <Register registerPost={registerPost} />} />
      </Routes>
    </div>
  );
};

export default App;