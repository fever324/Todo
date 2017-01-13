import React, { Component, PropTypes } from 'react'
class TodoHeader extends Component {
  render() {
    return (
      <div>
        <h1 className="header">HF's To Do </h1>
        <input className="inputBox" type="text" placeholder="What?" onKeyPress={this.handleKeyPress.bind(this)}></input>
      </div>
    )
  }

  handleKeyPress(event) {
    if (event.key === 'Enter'){

      const task = event.target.value
      if (!/\S/.test(task)){ //Regex for one non-whitespace
        return
      }
      this.props.onAddTodo(task)
      event.target.value = ""
    }
  }
}

TodoHeader.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default TodoHeader
