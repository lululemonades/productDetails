import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemMaterialStyle = styled.div`
  border:1px solid #fafafa;
  background-color: white;
  box-sizing: border-box;
  font-size: 13px;
  font-weight: normal;
  border-bottom: 1.5px solid #e0e0e0;
  padding: 15px 17px 13px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1.4px;
  width: 100%;
  margin-top:10px;
`;

const Plus = styled.div`
  font-size:14pt;
`;

const FabricCareFeaturesOuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
        <ItemMaterialStyle onClick={() => this.toggleFabric}>
          <FabricCareFeaturesOuterDiv>
            <div>Fabric</div>
            <Plus>+</Plus>
          </FabricCareFeaturesOuterDiv>
          {this.state.displayFabricInfo && <div>{this.props.fabric}</div>}
        </ItemMaterialStyle>

        <ItemMaterialStyle onClick={() => this.toggleCare}>
          <FabricCareFeaturesOuterDiv>
            <div>Care</div>
            <Plus>+</Plus>
          </FabricCareFeaturesOuterDiv>
          {this.state.displayCareInfo && <div>{this.props.care}</div>}
        </ItemMaterialStyle>

        <ItemMaterialStyle onClick={() => this.toggleFeatures}>
          <FabricCareFeaturesOuterDiv>
            <div>Features</div>
            <Plus>+</Plus>
          </FabricCareFeaturesOuterDiv>
          {this.state.displayFeaturesInfo && <div>{this.props.features}</div>}
        </ItemMaterialStyle>
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
