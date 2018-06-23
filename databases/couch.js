const nano = require('nano')('http://localhost:5984');

const getProduct = (productId, callback) => {
  const products = nano.use('products');
  products.view('rapid_retail', 'all_products', { key: productId }, (err, data) => {
    if (!err) {
      callback(data.rows[0].value);
    } else {
      console.log(err);
    }
  });
};

getProduct(44444, res => console.log('res is', res));

module.exports = getProduct;
