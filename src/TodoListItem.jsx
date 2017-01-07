import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

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
        </input>);
    }

    const style = {
      textDecoration: this.props.completed ? "line-through" : "",
    }
    return (
      <label 
        style={style} 
        onDoubleClick={this.onTodoDoubleClick.bind(this)}>
        {this.props.task}
      </label>
    );
  }

  renderCheckBox() {
    return (
      <input 
        type="checkbox"
        checked={this.props.completed}
        onChange={this.onCheckboxClicked.bind(this)} />
    );
  }

  onDelete(event) {
    this.props.deleteTodo(this.props.task)
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.updateTodo(this.props.task, event.target.value)
      this.setState({isEditing: false});
    }
  }

  onBlur(event) {
    this.props.updateTodo(this.props.task, event.target.value)
    this.setState({isEditing: false});
  }

  onCheckboxClicked(event) {
    this.props.toggleTodo(this.props.task);
  }

  onTodoDoubleClick(event) {
    this.setState({
      isEditing: true,
    })
  }

  render() {
    return (
      <div>
        {this.renderCheckBox()}
        {this.renderTodo()}
        <button onClick={this.onDelete.bind(this)}>X</button>
      </div>
    );
  }

}
export default TodoListItem;
