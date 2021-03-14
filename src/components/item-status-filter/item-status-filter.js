import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  render() {

    // const { donePressed, activePressed, onFilterAll, onFilterActive, onFilterDone } = this.props;

    return (
      <div className="btn-group">
        <button
          className="btn btn-info"
        >
          All
        </button>
        <button
          className="btn btn-outline-secondary"
        >
          Active
        </button>
        <button
          className="btn btn-outline-secondary"
        >
          Done
        </button>
      </div>
      // <div className="btn-group">
      //   <button
      //     className={`btn ${!donePressed && !activePressed ? 'btn-info' : 'btn-outline-secondary'}`}
      //     onClick={onFilterAll}
      //   >
      //     All
      //   </button>
      //   <button
      //     className={`btn ${activePressed ? 'btn-info' : 'btn-outline-secondary'}`}
      //     onClick={onFilterActive}
      //   >
      //     Active
      //   </button>
      //   <button
      //     className={`btn ${donePressed ? 'btn-info' : 'btn-outline-secondary'}`}
      //     onClick={onFilterDone}
      //   >
      //     Done
      //   </button>
      // </div>
    );

  }

}