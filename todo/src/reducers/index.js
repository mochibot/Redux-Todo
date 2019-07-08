import { ADD_TASK, TOGGLE_TASK, DELETE_TASK  } from '../actions';

const initialState = {
  todos: [
    {
      id: 1560803509433,
      value: 'Do dishes',
      completed: false
    },
    {
      id: 1560803509438,
      value: 'Cook dinner',
      completed: false
    }  
  ]
}

let persistedState;

if (localStorage.getItem('todo-state') === null) {
  persistedState = initialState;
} else {
  persistedState = JSON.parse(localStorage.getItem('todo-state'))
}


export const reducer = (state = persistedState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          value: action.payload,
          completed: false
        }]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
      }
    case DELETE_TASK:
      let task = state.todos.filter(item => item.id === action.payload);
      if (task[0].completed) {
        return {
          ...state,
          todos: state.todos.filter(item => item.id !== action.payload)
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}

