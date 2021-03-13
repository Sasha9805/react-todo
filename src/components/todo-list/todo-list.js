import React from 'react';
import './todo-list.css';

import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, isActivePressed, isDonePressed, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map(item => {

    const {id, ...itemProps} = item;
    let style;

    if (isDonePressed) {
      style = {
        display: itemProps.done && itemProps.visible ? 'block' : 'none'
      };
    } else if (isActivePressed) {
      style = {
        display: !itemProps.done && itemProps.visible ? 'block' : 'none'
      };
    } else {
      style = {
        display: itemProps.visible ? 'block' : 'none'
      };
    }

    return (
      <li key={id} className="list-group-item" style={style}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;