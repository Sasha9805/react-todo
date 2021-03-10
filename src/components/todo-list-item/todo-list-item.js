import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState({
      done: true,
    });
  };

  onMarkImportant = () => {
    this.setState({
      important: true
    });
  };

  render() {

    const { label } = this.props;

    const { done, important } = this.state;

    let classNames = 'todo-list-item d-flex justify-content-between';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    // const style = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    return (
      <span className={ classNames }>

        <span className="todo-list-item-label"
              onClick={ this.onLabelClick }>
          { label }
        </span>

        <span className="todo-list-item-buttons">
          <button
              className="btn btn-sm btn-outline-success"
              onClick={ this.onMarkImportant }>
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