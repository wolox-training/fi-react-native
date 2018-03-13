import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Todo from './Components/Todo';
import styles from './styles';

const AppLayout = ({
  onChangeText,
  addTodo,
  handleTodoCheck,
  todos,
  removeTodos,
  deleteTodo,
  inputValue
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Enter an item!"
      onChangeText={onChangeText}
      onSubmitEditing={addTodo}
      value={inputValue}
      underlineColorAndroid="transparent"
    />
    <ScrollView style={styles.bodyContainer}>
      {todos.map(todo => (
        <Todo key={todo.text} todo={todo} onCheck={handleTodoCheck} onDelete={deleteTodo} />
      ))}
    </ScrollView>
    <TouchableOpacity style={styles.removeButton} onPress={removeTodos}>
      <Text style={styles.removeText}> Remove completed items </Text>
    </TouchableOpacity>
  </View>
);

AppLayout.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.text,
      checked: PropTypes.bool
    })
  ),
  handleTodoCheck: PropTypes.func,
  deleteTodo: PropTypes.func,
  onChangeText: PropTypes.func,
  addTodo: PropTypes.func,
  removeTodos: PropTypes.func,
  inputValue: PropTypes.string
};

export default AppLayout;
