import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({onItemAdded}) => {

  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary"
        onClick={() => onItemAdded('Learn React')} >
        Add Item
      </button>
    </div>
  );

};

export default ItemAddForm;