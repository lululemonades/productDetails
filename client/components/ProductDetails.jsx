import React from'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('/productdetails')
    .then((response) => {
      this.setState ({
        products: response.data
      })
    })
    .catch((error) => {
      console.log('your get has an error', error);
    })
  }

  render() {
    return(
      <h1>[******Product Details Component Rendered******]</h1>
      <div>
      </div>
    )
  }
}


export default ProductDetails; 
  // {
  //   products.map((product, i) => {
  //     return <div>{product}</div>;
  //   })
  // }