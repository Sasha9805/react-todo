import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  render() {

    const { donePressed, activePressed } = this.props;

    return (
      <div className="btn-group">
        <button
          className={`btn ${!donePressed && !activePressed ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={this.props.onFilterAll}
        >
          All
        </button>
        <button
          className={`btn ${activePressed ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={this.props.onFilterActive}
        >
          Active
        </button>
        <button
          className={`btn ${donePressed ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={this.props.onFilterDone}
        >
          Done
        </button>
      </div>
    );

  }

}