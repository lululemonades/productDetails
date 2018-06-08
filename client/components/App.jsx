import React from 'react';
import axios from 'axios';
import Colors from './Colors.jsx';
import Sizes from './Sizes.jsx';
import ItemMaterial from './ItemMaterial.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      itemId: 1,
      share: false,
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

  toggleShare() {
    this.setState({
      share: !this.state.share,
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
                <div className="horizontal-line" />

                <div>
                  <Colors colors={product.color} />
                </div>

                <br />

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
                  <div className="inner">
                    <button onClick={this.toggleShare.bind(this)}><img alt="" src="share.png" id="share" /> Share</button>
                    {
                      this.state.share &&
                      <div>
                        <div>Facebook</div>
                        <div>Email</div>
                        <div>Message</div>
                      </div>
                    }
                  </div>

                  <span className="vertical-line" />
                  <div className="inner">
                    <button><img alt="" src="square-bubble.png" id="share" /> Live Chat</button>
                  </div>

                  <span className="vertical-line" />
                  <div className="inner">
                    <button><img src="star.png" alt="" id="share" /> Reviews</button>
                  </div>


                </div>

                <div>
                  <ItemMaterial
                    fabric={product.fabric}
                    care={product.care}
                    features={product.features}
                  />
                  <br />
                  <span className="sku">SKU: {product._id}</span>
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
