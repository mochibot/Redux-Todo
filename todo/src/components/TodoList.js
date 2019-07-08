import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

    return (
      <div className='todo-list-container'>
        {props.list.length === 0 ? <div>No to-do. Yay!</div> : ''}
        {props.list.map((item, index) => <TodoItem todo={item} key={index} toggleTask={props.toggleTask} deleteTask={props.deleteTask}/>)}
      </div>
    )
}

export default TodoList;