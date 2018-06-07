import React from 'react';
import axios from 'axios';
import Colors from './Colors.jsx';
import Sizes from './Sizes.jsx';
import ItemMaterial from './ItemMaterial.jsx';

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
                <span className="price">{product.price}</span>
                <div>Why we made this</div>
                <p>{product.description}</p>
                <div className="border" />

                <div>
                  <Colors colors={product.color} />
                </div>

                <div>
                  <Sizes sizes={product.size} />
                </div>

                <div>
                  <div>
                    <button className="button" id="bag">ADD TO BAG</button>
                  </div>

                  <div>
                    <button className="button" id="store">FIND IN STORE</button>
                  </div>
                </div>

                <div className="social">
                  <button><img src="share.png" id="share" /> Share</button>
                  <span className="vertical-line" />
                  <button><img src="square-bubble.png" id="share" /> Live Chat</button>
                  <button><img src="star.png" id="share" /> Reviews</button>
                </div>

                <div>
                  <ItemMaterial fabric={product.fabric} care={product.care} features={product.features} />
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
