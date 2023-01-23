import React from 'react';

const Header = ({value, setValue, todos}) => {
  return (
    <div className='header'>
      <h1>Todo list: {todos.length}</h1>
      <select
        onChange={(e) => setValue(e.target.value)} 
        value={value}  
        name="" id="">
        <option value="all">all</option>
        <option value="done">done</option>
        <option value="not done">not done</option>
      </select>
    </div>
  );
};

export default Header;