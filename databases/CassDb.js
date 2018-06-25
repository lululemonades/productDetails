const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'productdetails' });

const arrayToSet = (items) => {
  if (Array.isArray(items)) {
    let list = '{';
    items.forEach((item) => {
      list += `'${item}',`;
    });
    return `${list.slice(0, -1)}}`;
  }
  return `{${items}}`;
};

const find = (id, callback) => {
  client.execute(`SELECT * FROM products WHERE id = ${id}`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

const edit = (product, callback) => {
  const productParams = `${product.id},'${product.title}','${product.price}','${product.description}',${arrayToSet(product.color)},${arrayToSet(product.size)},'${product.fabric}','${product.care}','${product.features}'`;
  client.execute(`INSERT INTO productdetails.products (id, title, price, description, color, size, fabric, care, features)VALUES (${productParams})`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

const add = (product, callback) => {
  const productParams = `${product.id},'${product.title}','${product.price}','${product.description}',${arrayToSet(product.color)},${arrayToSet(product.size)},'${product.fabric}','${product.care}','${product.features}'`;
  client.execute(`INSERT INTO productdetails.products (id, title, price, description, color, size, fabric, care, features)VALUES (${productParams})`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

const remove = (id, callback) => {
  client.execute(`DELETE FROM productdetails.products WHERE id = ${id} IF EXISTS`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

module.exports = {
  find, edit, add, remove,
};
// CREATE TABLE products (
//     id              int PRIMARY KEY,
//     title           text,
//     price           real,
//     description     text,
//     color           text [],
//     size            text [],
//     fabric          varchar(20),
//     care            varchar(20),
//     features        text
// );
