const mongoose = require('mongoose');
const itemDetails = require('./mockData');

mongoose.connect('mongodb://localhost:27017/productDetails', (err, db) => {
    if (err) {
        console.log('YOUR DB IS NOT CONNECTED')
    } else {
        console.log('YOUR DB IS CONNECTED!!');
    }
});

let productSchema = mongoose.Schema({
    "title": String,
    "price": String,
    "description": String,
    "color": String, // Will change to an array of multiple color strings
    "size": Number, // Will change to an array of multiple size numbers
    "id": Number
});

let ProductDetail = mongoose.model('ProductDetail', productSchema);
// console.log(itemDetails)
// iterate through item
for (var i = 0; i < itemDetails.length; i++) {
    // console.log(itemDetails[i])
    (function() {
        var products = new ProductDetail({
            "title": itemDetails[i].title,
            "price": itemDetails[i].price,
            "description": itemDetails[i].description,
            "color": itemDetails[i].color,
            "size": itemDetails[i].size,
            "id": itemDetails[i].id
        });
    })()
}

products.save()
    .then((data) => {
        // console.log('YOU INSERT TO DB', data)
    }).catch((err) => {
        // console.log('YOU FAILED INSERT', err)
    });



module.exports = {
    retrieve,
    ProductDetail
};