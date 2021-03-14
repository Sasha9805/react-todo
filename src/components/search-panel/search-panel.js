import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };

  render() {
    const searchText = 'Type here to search';

    return (
      <input
        placeholder={ searchText }
        className="form-control search-input"
        value={this.state.term}
        onChange={this.onSearchChange}
        // onChange={(event) => this.props.onSearch(event.target.value)}
      />
    );

  }
}