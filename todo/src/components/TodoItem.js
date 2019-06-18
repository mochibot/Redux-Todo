import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons' 

const TodoItem = (props) => {
  return (
    <div className='todo-item'>
      {props.todo.completed ? <FontAwesomeIcon onClick={(event) => props.deleteTask(event, props.todo.id)}className='delete-btn' icon={faTrashAlt} /> : ''}<div className={`${props.todo.completed}`} onClick={(event) => props.toggleTask(event, props.todo.id)}>{props.todo.value}</div>
      
      
    </div>
  )
}

export default TodoItem;