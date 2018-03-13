import React, { Component } from 'react';

import AppLayout from './layout';

class App extends Component {
  state = {
    todos: [],
    input: ''
  };

  handleAddTodo = () => {
    this.setState(prevState => ({
      todos: [...prevState.todos].concat({ id: new Date().getTime(), text: prevState.input, checked: false }),
      input: ''
    }));
  };

  handleChangeText = text => {
    this.setState({ input: text });
  };

  handleTodoCheck = selectedTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.map(
        todo => (selectedTodo.id === todo.id ? { ...todo, checked: !todo.checked } : todo)
      )
    }));
  };

  removeTodos = () => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => !todo.checked) }));
  };

  handleDeleteTodo = selectedTodo => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== selectedTodo.id) }));
  };

  render() {
    return (
      <AppLayout
        onChangeText={this.handleChangeText}
        todos={this.state.todos}
        handleTodoCheck={this.handleTodoCheck}
        addTodo={this.handleAddTodo}
        inputValue={this.state.input}
        removeTodos={this.removeTodos}
        deleteTodo={this.handleDeleteTodo}
      />
    );
  }
}

export default App;
