import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.scss';
import App from './App';
import { reducer } from './reducers';


const store = createStore(reducer);

const saveState = (state) => {
  localStorage.setItem('todo-state', JSON.stringify(state));
}

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

