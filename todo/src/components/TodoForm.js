import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons' 

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    }
  }

  taskInput = (event) => {
    this.setState({
      newTask: event.target.value
    })
  }

  addTaskHandler = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({
      newTask: ''
    })
  }

  render() {
    return (
      <div className='todo-form'>
        <form onSubmit={this.addTaskHandler}>
          <input placeholder='Enter task' value={this.state.newTask} onChange={this.taskInput} required/>
          <button><FontAwesomeIcon className='add-btn' icon={faPlus}/></button>
        </form>
      </div>
    )
  }
}

export default TodoForm;