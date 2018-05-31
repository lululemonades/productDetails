const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productdetails', (err, db) => {
    if (err) {
        console.log('YOUR DB IS NOT CONNECTED')
    } else {
        console.log('YOUR DB IS CONNECTED!!');
    }
});