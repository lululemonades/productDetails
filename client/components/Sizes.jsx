import React from 'react';

const sizes = props => (
  <div>
    <select className="sizes">
      <option>Select Size</option>
      {
        props.sizes.map(size => <option>{size} </option>)
      }
    </select>
  </div>
);

export default sizes;
