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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        todos: [...state.todos, {
          id: action.id,
          value: action.value,
          completed: false
        }]
      };
    default:
      return state;
  }
}

