import React from 'react';
import PropTypes from 'prop-types';

import TodoLayout from './layout';

const Todo = ({ todo, check, deleteTodo }) => (
  <TodoLayout todo={todo} check={check} deleteTodo={deleteTodo} />
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    checked: PropTypes.bool
  }),
  check: PropTypes.func,
  deleteTodo: PropTypes.func
};
export default Todo;
