import React from 'react';

const ListItem = ({title, comleted, index, deleteItem, changeCompleted}) => {
  return (
    <div>
      <span>{index + 1}</span>
      <input 
        onClick={changeCompleted} 
        type="checkbox" 
        checked={comleted}/>
      <span>{title}</span>
      <button
        onClick={deleteItem} 
        style={{display: comleted? 'block' : 'none'}}>delete</button>
    </div>
  );
};

export default ListItem;