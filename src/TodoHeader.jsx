import React, { Component } from 'react';

class TodoHeader extends Component {
  render() {
    return (
      <div>
        <h1>HF's To Do </h1>
        <input type="text" placeholder="what to do?" onKeyPress={this.handleKeyPress.bind(this)}></input>
      </div>
    );
  }

  handleKeyPress(event) {
    if (event.key === 'Enter'){

      const todo = event.target.value;
      if (!/\S/.test(todo)){ //Regex for one non-whitespace
        return;
      }
      this.props.createTodo(todo);
      event.target.value = "";
    }
  }

}

export default TodoHeader;
