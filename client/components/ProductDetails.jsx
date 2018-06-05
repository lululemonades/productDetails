import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get('/productDetails')
      .then((response) => {
        // console.log(response.data);
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log('your get has an error', error);
      });
  }

  render() {
    return (
      <div>
        <h1>lululemonades product details</h1>
        <div className="product-details">
          {
            this.state.products.slice(0, 1).map(product => (
              <div>
                <div>
                  <h2>{product.title}</h2>
                  <div>{product.price}</div>
                </div>
              </div>
              ))
          }
        </div>
      </div>
    );
  }
}

// still working on components
export default ProductDetails;

// {
//   products.map((product, i) => {
//     return <div>{product}</div>;
//   })
// }
