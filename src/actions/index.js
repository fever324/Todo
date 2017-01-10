import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO, SET_VISIBILITY_FILTERS } from './actionTypes.js'

let nextTodoId = 0;

export function addTodo(task) {
  return {
    id: nextTodoId++,
    type: ADD_TODO,
    task
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function updateTodo(id, task) {
  return {
    type: UPDATE_TODO,
    id,
    task
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTERS,
    filter
  }
}