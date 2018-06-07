import React from 'react';


class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorName: false,
    };
  }

  toggleColorName() {
    this.setState({
      displayColorName: !this.state.displayColorName,
    });
  }

  render() {
    return (
      <div>
        {
          this.props.colors.map(color => (
            <div className="color-box" style={{ backgroundColor: color }} onClick={this.toggleColorName.bind(this)}>
              {this.state.displayColorName && <div>{color}</div>}
            </div>
          ))
        }
      </div>
    );
  }
}


export default Colors;
