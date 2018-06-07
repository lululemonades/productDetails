import React from 'react';


class Colors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="color-box" style={{ backgroundColor: 'DeepSkyBlue' }} />
        {/* {
          this.props.colors.forEach((color) => {
            <div className="color-box" style={{ backgroundColor: color }} />;
          })
        } */}
      </div>
    );
  }
}

export default Colors;
