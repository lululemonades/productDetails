const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../databases/PostgresDb.js');
// const db = require('../databases/CassDb.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static('public'));
app.use(cors());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


app.get('/productDetails/:id', (req, res) => {
  db.find(req.params.id, (err, data) => {
    if (err) res.send(err);
    else {
      console.log(data.rows)
      res.send(data.rows);
    };
  });
});

app.put('/productDetails/:id', (req, res) => {
  const product = req.body;
  db.edit(product, (err, data) => {
    if (err) res.send(err)
    else res.send(data);
  })
});

app.post('/productDetails/:id', (req, res) => {
  const product = req.body;
  db.add(product, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  })
});

app.delete('/productDetails/:id', (req, res) => {
  db.remove(req.params.id, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  })
});

module.exports = app;
