import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';

const ItemMaterialStyle = styled.div`
  border:1px solid #fafafa;
  background-color: white;
  box-sizing: border-box;
  font-size: 14pt;
  font-weight: normal;
  border-bottom: 1.5px solid #e0e0e0;
  padding: 15px 17px 13px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0px;
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

const Paragraph = styled.div`
  font-size: 12pt;
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
        <ItemMaterialStyle onClick={() => this.toggleFabric()}>
          <FabricCareFeaturesOuterDiv>
            <div>Fabric</div>
            <Plus>+</Plus>
          </FabricCareFeaturesOuterDiv>
          {this.state.displayFabricInfo && <Bounce><Paragraph>{this.props.fabric}</Paragraph></Bounce>}
        </ItemMaterialStyle>

        <ItemMaterialStyle onClick={() => this.toggleCare()}>
          <FabricCareFeaturesOuterDiv>
            <div>Care</div>
            <Plus>+</Plus>
          </FabricCareFeaturesOuterDiv>
          {this.state.displayCareInfo && <Bounce><Paragraph>{this.props.care}</Paragraph></Bounce>}
        </ItemMaterialStyle>

        <ItemMaterialStyle onClick={() => this.toggleFeatures()}>
          <FabricCareFeaturesOuterDiv>
            <div>Features</div>
            <Plus>+</Plus>
          </FabricCareFeaturesOuterDiv>
          {this.state.displayFeaturesInfo && <Bounce><Paragraph>{this.props.features}</Paragraph></Bounce>}
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
