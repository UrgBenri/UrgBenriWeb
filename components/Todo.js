import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const Todo = ({ onClick, completed, text }) => (
  <div>
    <ListItem
      onTouchTap={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      primaryText={text}
    />
    <Divider />
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
