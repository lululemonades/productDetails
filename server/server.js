const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = require('../databases/index.js');

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/productDetails/:id', (req, res) => {
  // console.log('look here', req.params.id)
  db.ProductDetail.find({ id: req.params.id })
    .then((data) => {
      // console.log('YOUR DATA', data);
      const product = data.slice(0, 1);
      res.send(product);
    }).catch((err) => {
      console.log('CANNOT RETRIEVE FROM DB', err);
    });
});

module.exports = app;
