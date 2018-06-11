import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  align-items: center;
  display: flex;
  margin-top: 2px;
  justify-content:space-between;
  position: relative;
  flex-flow: row nowrap;
  height: 44px;
  width: 232px;
  padding: 10px;
`;

const Sizes = props => (
  <div>
    <Select> 
      <option disabled selected>Select Size</option>
      {
        props.sizes.map(size => <option>{size} </option>)
      }
    </Select>
  </div>
);

export default Sizes;
