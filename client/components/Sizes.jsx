import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Select = styled.select`
  align-items: center;
  position: relative;
  background-color: white;
  box-shadow: 1px 1px 4px 0 hsla(0,0%,88%,.5);
  display: flex;
  height: 45px;
  width: 296px;
  padding: 10px;
  font-family: 'Josefin Sans';
  font-size: 12pt;
  font-weight: 300;
  margin-top: 2px;
  justify-content:space-between;
  flex-flow: row nowrap;
`;

const Sizes = props => (
  <div>
    <Select>
      <option disabled selected>Select Size</option>
      {
        props.sizes.map(size => <option key={size}>{size} </option>)
      }
    </Select>
  </div>
);

Sizes.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Sizes;
