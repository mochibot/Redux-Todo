export const ADD_TASK = 'ADD_TASK';

export const addTask = (task) => {
  console.log(task)
  return {
    type: ADD_TASK,
    id: Date.now(),
    value: task
  }
}