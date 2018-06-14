import React from 'react';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';

class ItemMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFabricInfo: false,
      displayCareInfo: false,
      displayFeaturesInfo: false,
    };
  }

  toggleFabric() {
    this.setState({
      displayFabricInfo: !this.state.displayFabricInfo,
    });
  }

  toggleCare() {
    this.setState({
      displayCareInfo: !this.state.displayCareInfo,
    });
  }

  toggleFeatures() {
    this.setState({
      displayFeaturesInfo: !this.state.displayFeaturesInfo,
    });
  }

  render() {
    return (
      <div>
        <div className="item-material" onClick={() => this.toggleFabric()}>
          <div className="item-material-container">
            <div>Fabric</div>
            <div id="plus">+</div>
          </div>
          {this.state.displayFabricInfo && <Bounce><div style={{ fontSize: '12pt' }}>{this.props.fabric}</div></Bounce>}
        </div>

        <div className="item-material" onClick={() => this.toggleCare()}>
          <div className="item-material-container">
            <div>Care</div>
            <div id="plus">+</div>
          </div>
          {this.state.displayCareInfo && <Bounce><div style={{ fontSize: '12pt' }} >{this.props.care}</div></Bounce>}
        </div>

        <div className="item-material" onClick={() => this.toggleFeatures()}>
          <div className="item-material-container">
            <div>Features</div>
            <div id="plus">+</div>
          </div>
          {this.state.displayFeaturesInfo && <Bounce><div style={{ fontSize: '12pt' }}>{this.props.features}</div></Bounce>}
        </div>
      </div>
    );
  }
}

ItemMaterial.propTypes = {
  fabric: PropTypes.string.isRequired,
  care: PropTypes.string.isRequired,
  features: PropTypes.string.isRequired,
};

export default ItemMaterial;
