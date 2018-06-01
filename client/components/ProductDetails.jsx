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
    axios.get('/productDetails')
    .then((response) => {
      console.log(response)
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
        <div>
          <h1>[******Product Details Component Rendered******]</h1>
          {
            this.state.products.map((product, i) => {
              return <div>{products.title}</div>
            })
          }
        </div>
    );
  }
}


export default ProductDetails; 
  // {
  //   products.map((product, i) => {
  //     return <div>{product}</div>;
  //   })
  // }