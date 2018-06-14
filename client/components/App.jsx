import React from 'react';
import axios from 'axios';
import Colors from './Colors';
import Sizes from './Sizes';
import ItemMaterial from './ItemMaterial';

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
              <div className="product-details-container" key={product}>
                <h1 className="title">{product.title}</h1>
                <span className="price">{product.price} <span style={{ fontSize: '9pt' }}>USD</span></span>
                <div className="description-title">Why we made this</div>
                <p className="description">{product.description}</p>

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

                <div className="share-live-chat-review-div">
                  <div className="inner">
                    <button className="share-live-chat-review-button" onClick={() => this.toggleShare()}><img className="icons" alt="" src="https://www.dropbox.com/s/gs517cfxgfftiql/shareicon.svg?raw=1" /><div>Share</div></button>
                    {
                      this.state.share &&
                      <div>
                        <div style={{ letterSpacing: '6px' }}>
                          <i className="fab fa-facebook-f fa-sm" />
                          <i className="fab fa-twitter fa-sm" />
                          <i className="fab fa-pinterest-p fa-sm" />
                          <i className="fab fa-tumblr fa-sm" />
                          <i className="fab fa-google-plus-g fa-sm" />
                          <i className="far fa-envelope fa-sm" />
                        </div>
                      </div>
                    }
                  </div>

                  <div className="vertical-line" />
                  <div className="inner">
                    <button className="share-live-chat-review-button"><img alt="" className="icons" src="https://www.dropbox.com/s/ridlic1h8p5vn8h/chaticon.svg?raw=1" /><div>Live Chat</div></button>
                  </div>

                  <div className="vertical-line" />
                  <div className="inner">
                    <button className="share-live-chat-review-button"><img className="icons" src="https://www.dropbox.com/s/u4ehp6c2f211sak/staricon.svg?raw=1" alt="" /><div>Reviews</div></button>
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
