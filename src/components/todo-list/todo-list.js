import React from 'react';
import './todo-list.css';

import TodoListItem from "../todo-list-item";

const TodoList = ({ todos,
                    // isActivePressed, isDonePressed,
                    onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map(item => {

    const {id, ...itemProps} = item;

    // let isDisplayed;
    //
    // if (isDonePressed) {
    //   isDisplayed = itemProps.done && itemProps.visible;
    // } else if (isActivePressed) {
    //   isDisplayed = !itemProps.done && itemProps.visible;
    // } else {
    //   isDisplayed = itemProps.visible;
    // }
    //
    // if (!isDisplayed) {
    //   return null;
    // }

    return (
      <li key={id} className="list-group-item">
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