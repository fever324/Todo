import React, { Component } from 'react';
import _ from 'lodash';
import TodoListItem from './TodoListItem.jsx';

class TodoList extends Component {
  renderItems() {
    const props = _.omit(this.props, "todos");
    return _.map(this.props.todos, (todo, index) => <TodoListItem {...todo} {...props}/>)
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default TodoList;
