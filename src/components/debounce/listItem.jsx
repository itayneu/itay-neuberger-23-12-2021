import React from 'react';
import './listItem.css';

const ListItem = ({ title, caption, imageUrl }) => {
  return (
    <div class="list-item-container">
      <div className="center">
        <h4>{title}</h4>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default ListItem;
