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

app.get('/productDetails', (req, res) => {
  db.retrieve()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log('YOUR GET CATCH HAS AN ERROR', error);
    });
});