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
          className="todo-editbox"
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
        onClick={this.onClick.bind(this)}>
        {this.props.task}
      </label>
    )
  }

  renderCheckBox() {
    return (
      <input 
        class="todo-checkbox"
        type="checkbox"
        checked={this.props.completed}
        onChange={this.onCheckboxClicked.bind(this)} />
    )
  }

  onClick() {
    var delta = new Date().getTime() - this.state.lastPress;
    if(delta < 200) {
      this.setState({
        isEditing: true,
      })
    }
    this.setState({
      lastPress: new Date().getTime()
    })
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

  render() {
    return (
      <li className="todo-list-item">
        {this.renderCheckBox()}
        {this.renderTodo()}
        <button className="todo-removebtn glyphicon glyphicon-remove" onClick={this.onDelete.bind(this)}/>
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
