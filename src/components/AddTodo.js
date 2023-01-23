import React, {useState} from 'react';
import MyButton from './MyButton';
const AddTodo = ({addTodo}) => {
  const [value, setValue] = useState('')

  const hanlderSubmit = (e) => {
    e.preventDefault()
    if(value === '') {
      alert('напиши что нибудь')
    } else {
      setValue('')
      addTodo(value)
    }
  }

  return (
    <form onSubmit={hanlderSubmit}>
      <input 
        placeholder='text'
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        type="text" />
      <MyButton color="#40407a" type='submit'>add</MyButton>
    </form>
  );
};

export default AddTodo;