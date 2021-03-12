import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {

    const { label, onDeleted,
            onToggleImportant,
            onToggleDone,
            done, important} = this.props;

    let classNames = 'todo-list-item d-flex justify-content-between';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>

        <span className="todo-list-item-label"
              onClick={ onToggleDone }>
          { label }
        </span>

        <span className="todo-list-item-buttons">
          <button
              className="btn btn-sm btn-outline-success"
              onClick={ onToggleImportant }>
            <i className="fa fa-exclamation"></i>
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDeleted} >
            <i className="fa fa-trash-o"></i>
          </button>
        </span>

      </span>
    );

  }

}