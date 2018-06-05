const mongoose = require('mongoose');
const itemDetails = require('./mockData');

mongoose.connect('mongodb://localhost:27017/productDetails', (err) => {
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
  color: String, // Will change to an array of multiple color strings
  size: Number, // Will change to an array of multiple size numbers
  id: Number,
});

const ProductDetail = mongoose.model('ProductDetail', productSchema);
// console.log(itemDetails)
// iterate through item
itemDetails.forEach((item) => {
  // (function () {
  const products = new ProductDetail({
    title: item.title,
    price: item.price,
    description: item.description,
    color: item.color,
    size: item.size,
    id: item.id,
  });
  // }());

  products.save();
  // .then((data) => {
  //   // console.log('YOU INSERT TO DB', data)
  // }).catch((err) => {
  //   // console.log('YOU FAILED INSERT', err)
  // });
});
// console.log(item)


module.exports = {
  ProductDetail,
};
