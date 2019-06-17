import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { addTask } from './actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList list={this.props.todos} />
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

export default connect(mapStateToProps, { addTask })(App);
