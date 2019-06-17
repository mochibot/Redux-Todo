import React from 'react';

const TodoItem = (props) => {
  return (
    <div>{props.todo.value}</div>
  )
}

export default TodoItem;