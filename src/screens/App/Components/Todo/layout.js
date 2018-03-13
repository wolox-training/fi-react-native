import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import RedCross from '../../../../../assets/red-cross.png';

import styles from './styles';

class TodoLayout extends Component {
  check = () => {
    this.props.check(this.props.todo);
  };
  deleteTodo = () => {
    this.props.deleteTodo(this.props.todo);
  };
  render() {
    return (
      <View style={this.props.todo.checked ? [styles.container, styles.selected] : styles.container}>
        <Text style={styles.todoText}>{this.props.todo.text}</Text>
        <View style={styles.todoRight}>
          <TouchableOpacity onPress={this.check}>
            <View style={this.props.todo.checked ? [styles.checkbox, styles.checked] : styles.checkbox} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.deleteTodo}>
            <Image style={styles.crossImage} source={RedCross} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TodoLayout.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    checked: PropTypes.bool
  }),
  check: PropTypes.func,
  deleteTodo: PropTypes.func
};

export default TodoLayout;
