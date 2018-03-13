import React from 'react';
import PropTypes from 'prop-types';

import Todo from './layout';

const TodoContainer = ({ todo, onCheck, onDelete }) => (
  <Todo todo={todo} check={onCheck} deleteTodo={onDelete} />
);

TodoContainer.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    checked: PropTypes.bool
  }),
  onCheck: PropTypes.func,
  onDelete: PropTypes.func
};

export default TodoContainer;
