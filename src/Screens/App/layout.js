import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Todo from './Components/Todo';

import styles from './styles';

class AppLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo List</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter an item!"
          onChangeText={this.props.onChangeText}
          onSubmitEditing={this.props.addTodo}
          value={this.props.inputValue}
          underlineColorAndroid='transparent'
        />
        <ScrollView style={styles.bodyContainer}>
          {this.props.todos.map(todo => <Todo key={todo.text} todo={todo} check={this.props.handleTodoCheck} deleteTodo={this.props.deleteTodo} />)}
        </ScrollView>
        <TouchableOpacity style={styles.removeButton} onPress={this.props.removeTodos}>
          <Text style={styles.removeText}> Remove completed items </Text>
        </TouchableOpacity>
      </View>);
      } 
  }

  AppLayout.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.text,
      checked: PropTypes.bool
    })),
    handleTodoCheck: PropTypes.func,
    deleteTodo: PropTypes.func,
    onChangeText: PropTypes.func,
    addTodo: PropTypes.func,
    removeTodos: PropTypes.func,
    inputValue: PropTypes.string
  };
  
  export default AppLayout;