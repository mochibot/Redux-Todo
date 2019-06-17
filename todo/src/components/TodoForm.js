import React from 'react';

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
      <div>
        <form onSubmit={this.addTaskHandler}>
          <input placeholder='Enter task' value={this.state.newTask} onChange={this.taskInput} />
          <button>Add task</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;