import React from 'react';
import ListItem from './ListItem';

const List = ({todos, changeCompleted, deleteItem, value}) => {
  return (
    <div className='list'>
      {
        todos.filter(item => {
          if(value === 'all') {
            return true
          } else if (value === 'done') {
            return item.comleted
          } else if (value === 'not done') {
            return !item.comleted
          }
        }).map((item, index) => {
          return <ListItem
            deleteItem={() => deleteItem(item.id)}
            changeCompleted={() => changeCompleted(item.id)}
            index={index} 
            key={item.id} 
            {...item}/>
        })
      }
    </div>
  );
};

export default List;