import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorBox = styled.div`
  float: left;
  width: 50px;
  height: 20px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, .2);
  cursor: pointer;
`;

const ColorName = styled.div`
  font-size:10px;
  margin: 5px;
  clear: left;
`;


class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorName: false,
      colorName: '',
    };
  }

  onClick(color) {
    this.changeColorName(color);
    this.toggleColorName();
  }

  toggleColorName() {
    this.setState({
      displayColorName: !this.state.displayColorName,
    });
  }

  changeColorName(color) {
    this.setState({
      colorName: color,
    });
  }

  render() {
    return (
      <div>
        {
          this.props.colors.map(color => (
            <div key={color}>
              <ColorBox style={{ backgroundColor: color }} onClick={() => this.onClick(color)} />
            </div>
          ))
        }
        {this.state.displayColorName && <ColorName>{this.state.colorName}</ColorName>}
      </div>
    );
  }
}

Colors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Colors;
