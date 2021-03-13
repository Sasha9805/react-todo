import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

  render() {
    const searchText = 'Type here to search';

    return (
      <input
        placeholder={ searchText }
        className="form-control search-input"
        onChange={(event) => this.props.onSearch(event.target.value)}/>
    );

  }
}