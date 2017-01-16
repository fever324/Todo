import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo, updateTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'all': 
      return todos
    case 'active':
      return todos.filter(t => t.completed)
    case 'completed':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

function mapStateToProps(state, { params }) {
  return {
    todos: getVisibleTodos(
      state.todos, 
      params.filter || 'all')
  }
}

let mapDispatchToProps = {
  onToggleTodo: toggleTodo,
  onUpdateTodo: updateTodo,
  onDeleteTodo: deleteTodo
}

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList))

export default VisibleTodoList