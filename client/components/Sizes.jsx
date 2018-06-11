import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Sizes.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sizes;
