const mongoose = require('mongoose');
const itemDetails = require('./mockData');

mongoose.connect('mongodb://localhost/product-details', (err) => {
  if (err) {
    console.log('YOUR DB IS NOT CONNECTED');
  } else {
    console.log('YOUR DB IS CONNECTED!!');
  }
});

const productSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String,
  color: Array, // Will change to an array of multiple color strings
  size: Array, // Will change to an array of multiple size numbers
  fabric: String,
  care: String,
  features: String,
  id: Number,
});

const ProductDetail = mongoose.model('ProductDetail', productSchema);
ProductDetail.collection.drop();
itemDetails.forEach((item) => {
  const products = new ProductDetail({
    title: item.title,
    price: item.price,
    description: item.description,
    color: item.color,
    size: item.size,
    fabric: item.fabric,
    care: item.care,
    features: item.features,
    id: item.id,
  });

  products.save();
});

module.exports = {
  ProductDetail,
};
