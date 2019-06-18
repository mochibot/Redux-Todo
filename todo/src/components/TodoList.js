import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

    return (
      <div>
        {props.list.map((item, index) => <TodoItem todo={item} key={index} toggleTask={props.toggleTask} deleteTask={props.deleteTask}/>)}
      </div>
    )
}

export default TodoList;