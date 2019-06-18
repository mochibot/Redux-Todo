import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
      <div onClick={(event) => props.toggleTask(event, props.todo.id)}>{props.todo.value}</div>
      <button onClick={(event) => props.deleteTask(event, props.todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem;