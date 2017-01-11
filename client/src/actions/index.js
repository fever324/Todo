import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO, SET_VISIBILITY_FILTERS } from './actionTypes.js'

let nextTodoId = 0;

export function addTodo(task, isRemote=false) {
  return {
    id: nextTodoId++,
    type: ADD_TODO,
    task,
    isRemote
  }
}

export function toggleTodo(id, isRemote=false) {
  return {
    type: TOGGLE_TODO,
    id,
    isRemote
  }
}

export function updateTodo(id, task, isRemote=false) {
  return {
    type: UPDATE_TODO,
    id,
    task,
    isRemote
  }
}

export function deleteTodo(id, isRemote=false) {
  return {
    type: DELETE_TODO,
    id,
    isRemote
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTERS,
    filter
  }
}