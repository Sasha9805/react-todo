import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false
  };

  onLabelClick = () => {
    // console.log(`done: ${this.props.label}`);
    this.setState({
      done: true
    });
  };

  render() {

    const { label, important = false } = this.props;

    const { done } = this.state;

    let classNames = 'todo-list-item d-flex justify-content-between';
    if (done) {
      classNames += ' done';
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className={ classNames }>

        <span className="todo-list-item-label"
              style={ style }
              onClick={ this.onLabelClick }>
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