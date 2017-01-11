import React, { Component, PropTypes } from 'react'

class TodoListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
        isEditing: false
    }
  }

  renderTodo() {
    if (this.state.isEditing) {
      return ( 
        <input 
          ref="editField" 
          type="text" 
          defaultValue={this.props.task}
          onBlur={this.onBlur.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}>
        </input>)
    }

    const style = {
      textDecoration: this.props.completed ? "line-through" : "none",
    }
    return (
      <label 
        style={style} 
        onDoubleClick={this.onTodoDoubleClick.bind(this)}>
        {this.props.task}
      </label>
    )
  }

  renderCheckBox() {
    return (
      <input 
        type="checkbox"
        checked={this.props.completed}
        onChange={this.onCheckboxClicked.bind(this)} />
    )
  }

  onDelete(event) {
    this.props.onDeleteTodo(this.props.id)
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onUpdateTodo(this.props.id, event.target.value)
      this.setState({isEditing: false})
    }
  }

  onBlur(event) {
    this.props.onUpdateTodo(this.props.id, event.target.value)
    this.setState({isEditing: false})
  }

  onCheckboxClicked(event) {
    this.props.onToggleTodo(this.props.id)
  }

  onTodoDoubleClick(event) {
    this.setState({
      isEditing: true,
    })
  }

  render() {
    return (
      <li>
        {this.renderCheckBox()}
        {this.renderTodo()}
        <button onClick={this.onDelete.bind(this)}>X</button>
      </li>
    )
  }
}

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
}

export default TodoListItem
