import React from 'react';

const SearchPanel = () => {

  const searchText = 'Type here to search';

  const searchStyles = {
    fontSize: '15px'
  };

  return <input
    placeholder={ searchText }
    style={ searchStyles }
    className="foo"/>;
};

export default SearchPanel;