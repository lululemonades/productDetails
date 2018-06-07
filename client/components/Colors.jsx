import React from 'react';

const Colors = props => (
  <div>
    {
      props.colors.map((color) => {
        return <span>{color} </span>
      })
    }
  </div>
);

export default Colors;
