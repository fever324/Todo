import React, { Component } from 'react'
import _ from 'lodash'
import TodoListItem from './TodoListItem'

class TodoList extends Component {
  renderItems() {
    const props = _.omit(this.props, "todos")
    return _.map(this.props.todos, (todo) => <TodoListItem key={todo.id} {...todo} {...props}/>)
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    )
  }
}

export default TodoList
