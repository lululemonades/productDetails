import React from 'react';

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
        <div className="item-material" onClick={this.toggleFabric.bind(this)}>Fabric
          {this.state.displayFabricInfo && <div>{this.props.fabric}</div>}
        </div>

        <div className="item-material" onClick={this.toggleCare.bind(this)}>Care
          {this.state.displayCareInfo && <div>{this.props.care}</div>}
        </div>

        <div className="item-material" onClick={this.toggleFeatures.bind(this)}>Features
          {this.state.displayFeaturesInfo && <div>{this.props.features}</div>}
        </div>
      </div>
    );
  }
}


export default ItemMaterial;
