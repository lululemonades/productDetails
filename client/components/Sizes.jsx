import React from 'react';

const sizes = props => (
  <div>
    {
      props.sizes.map((size) => {
        return <span>{size} </span>
      })
    }
  </div>
);

export default sizes;
