const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const db = require('../databases/postgres.js');

const port = process.env.PORT || 3001;
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static('public'));
app.use(cors());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/productDetails/:id', (req, res) => {
  db.query('SELECT * FROM products WHERE id = 9888888;', (err, data) => {
    if (err) console.log('CANNOT RETRIEVE FROM DB', err);
    else {
      console.log('---TESTING FROM NODE---');
      console.log('data is:');
      console.log(data.rows[0]);
      res.send([data.rows[0]]);
    }
  });
  // const results = [];
  // // Get a Postgres client from the connection pool
  // // SQL Query > Select Data
  // const query = db.query('SELECT * FROM products WHERE id = 9888888;');
  // // Stream results back one row at a time
  // query.on('row', (row) => {
  //   results.push(row);
  // });
  // // After all data is returned, close connection and return results
  // query.on('end', () => {
  //   // done();
  //   console.log('-------------------------RESULTS');
  //   console.log(res.json(results));
  //   return res.json(results);
  // });
  
// app.get('/productDetails/:id', (req, res) => {
//   console.log('look here', req.params.id)
//   console.log('GET request... req.url is', req.url);
//   db.ProductDetail.find({ id: req.params.id })
//     .then((data) => {
//       console.log('YOUR DATA', data);
//       // const product = data.slice(0, 1);
//       res.send(data);
//     }).catch((err) => {
//       console.log('CANNOT RETRIEVE FROM DB', err);
//     });
});

module.exports = app;

// // sending:
// [ { color: [ 'MintCream', 'MidnightBlue', 'MistryRose' ],
//     size: [ 3 ],
//     _id: 5b2c10933c7db6e8578d4f02,
//     title: 'Property-Casualty Insurers',
//     price: '$65.53',
//     description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
//     fabric: 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
//     care: 'Jewelery',
//     features: 'Nam dui.',
//     id: 88,
//     __v: 0 } ]

//     { id: 9888888,
//       title: 'Ea sunt veniam.',
//       price: '$160',
//       description: 'Aute officia mollit reprehenderit dolore consequat laboris in incididunt. Elit sit excepteur.',
//       size: [ 2, 4, 6, 8, 10, 12, 14 ],
//       fabric: 'ex esse laborum',
//       care: 'in cupidatat magna',
//       features: 'id tempor non' }