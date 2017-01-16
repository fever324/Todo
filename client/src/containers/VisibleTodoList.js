import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo, updateTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers'

function mapStateToProps(state, { params }) {
  return {
    todos: getVisibleTodos(
      state, 
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