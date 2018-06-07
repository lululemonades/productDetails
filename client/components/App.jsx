import React from 'react';
import axios from 'axios';
import Colors from './Colors.jsx';
import Sizes from './Sizes.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      itemId: 1,
    };
  }
  componentDidMount() {
    axios.get(`/productDetails/${this.state.itemId}`)
      .then((response) => {
        // console.log('look', response.data);
        this.setState({
          products: [...response.data],
        });
      })
      .catch((error) => {
        console.log('your get has an error', error);
      });
  }

  render() {
    return (
      <div>
        <div className="product-details">
          {
            this.state.products.map(product => (
              <div>
                <h1>{product.title}</h1>
                <div className="price">{product.price}</div>
                <div>Why we made this</div>
                <p>{product.description}</p>
                <div className="border" />
                <div>
                  <Colors colors={product.color} />
                </div>
                <div>
                  <Sizes sizes={product.size} />
                </div>
              </div>
            ))
         }
        </div>
      </div>
    );
  }
}

export default App;
