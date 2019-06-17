import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

    return (
      <div>
        {props.list.map((item, index) => <TodoItem todo={item} key={index}/>)}
      </div>
    )
}

export default TodoList;