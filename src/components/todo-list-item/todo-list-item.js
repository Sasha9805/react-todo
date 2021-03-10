import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {

    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="todo-list-item d-flex justify-content-between">

        <span className="todo-list-item-label"
              style={ style }>
          { label }
        </span>

        <span className="todo-list-item-buttons">
          <button className="btn btn-sm btn-outline-success">
            <i className="fa fa-exclamation"></i>
          </button>

          <button className="btn btn-sm btn-outline-danger">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>

      </span>
    );

  }

}