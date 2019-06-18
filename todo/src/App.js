import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { addTask, toggleTask, deleteTask } from './actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  toggleTaskHandler = (event, id) => {
    event.preventDefault();
    this.props.toggleTask(id);
  }

  deleteTaskHandler = (event, id) => {
    event.preventDefault();
    this.props.deleteTask(id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList list={this.props.todos} toggleTask={this.toggleTaskHandler} deleteTask={this.deleteTaskHandler} />
          <TodoForm addTask = {this.props.addTask}/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTask, toggleTask, deleteTask })(App);
