import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import TodoList from './TodoList.jsx';
import TodoHeader from './TodoHeader.jsx';

const todos = [
{
  task: 'Write code',
  completed: false
},
{
  task: 'Make money',
  completed: false
},
{
  task: 'Buy stuff',
  completed: true
},
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      todos
    }
  }

  createTodo(task) {
    this.state.todos.push({
      task,
      completed: false
    });
    this.setState({ todos: this.state.todos});
  }

  toggleTodo(task) {
    const todo = _.find(this.state.todos, todo => todo.task === task);
    todo.completed = !todo.completed;
    this.setState({ todos: this.state.todos});
  }

  updateTodo(oldTask, newTask) {
    const todo = _.find(this.state.todos, todo => todo.task === oldTask);
    todo.task = newTask;
    this.setState({ todos: this.state.todos});

  }

  deleteTodo(task){
    _.remove(this.state.todos, todo => todo.task === task);
    this.setState({ todos: this.state.todos});
  }

  render() {
    return (
      <div>
        <TodoHeader createTodo={this.createTodo.bind(this)} />
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo.bind(this)} 
          updateTodo={this.updateTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
          />
      </div>
    );
  }
}

export default App;
