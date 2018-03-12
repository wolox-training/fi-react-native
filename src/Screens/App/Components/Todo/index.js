import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoLayout from './layout';

class Todo extends Component {
  render() {
    return <TodoLayout todo={this.props.todo} check={this.props.check} deleteTodo={this.props.deleteTodo} />;
    } 
  }

  Todo.propTypes  = {
    todo: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.text,
      checked: PropTypes.bool
    }),
    check: PropTypes.func,
    deleteTodo: PropTypes.func
  }
  export default Todo;