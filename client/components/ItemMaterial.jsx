import React from 'react';
import styled from 'styled-components';

const ItemMaterialStyle = styled.div`
  border:1px solid #fafafa;
  box-shadow: 10px 5px 5px #e0e0e0;
  background-color: white;
  box-sizing: border-box;
  font-size: 13px;
  font-weight: normal;
  padding: 15px 17px 13px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1.4px;
  width: 100%;
  margin-top:10px;
`;

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
        <ItemMaterialStyle onClick={this.toggleFabric.bind(this)}>Fabric 
          {this.state.displayFabricInfo && <div>{this.props.fabric}</div>}
        </ItemMaterialStyle>

        <ItemMaterialStyle onClick={this.toggleCare.bind(this)}>Care
          {this.state.displayCareInfo && <div>{this.props.care}</div>}
        </ItemMaterialStyle>

        <ItemMaterialStyle onClick={this.toggleFeatures.bind(this)}>Features
          {this.state.displayFeaturesInfo && <div>{this.props.features}</div>}
        </ItemMaterialStyle>
      </div>
    );
  }
}


export default ItemMaterial;
