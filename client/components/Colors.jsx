import React from 'react';


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
            <div>
              <div className="color-box" style={{ backgroundColor: color }} onClick={() => this.onClick(color)} />
            </div>
          ))
        }
        {this.state.displayColorName && <div className="color-name">{this.state.colorName}</div>}
      </div>
    );
  }
}

export default Colors;
