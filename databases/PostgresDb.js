const pg = require('pg');

const connection = 'postgres://postgres:NEWT1MES@localhost:5432/sdcpostgres';

const client = new pg.Client(connection);
client.connect((err, conn) => {
  if (err) console.log(err);
  else console.log('success');
});

const arrayToSet = (items) => {
  if (Array.isArray(items)) {
    let list = '{';
    items.forEach((item) => {
      list += `${item},`;
    });
    return `${list.slice(0, -1)}}`;
  };
  return `{${items}}`;
};

const find = (id, callback) => {
  client.query(`SELECT * FROM products WHERE id = ${id}`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

const edit = (product, callback) => {
  client.query(`UPDATE products SET 
        id = ${product.id},
        title = '${product.title}',
        price = ${product.price},
        description = '${product.description}',
        color = '${arrayToSet(product.color)}',
        size = '${arrayToSet(product.size)}',
        fabric = '${product.fabric}',
        care = '${product.care}',
        features = '${product.features}'
        WHERE id = ${product.id}`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

const add = (product, callback) => {
  const productParams = `${product.id},'${product.title}','${product.price}','${product.description}','${arrayToSet(product.color)}','${arrayToSet(product.size)}','${product.fabric}','${product.care}','${product.features}'`;
  client.query(`INSERT INTO products VALUES (${productParams})`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  })
}

const remove = (id, callback) => {
  client.query(`DELETE FROM products WHERE id = ${id};`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};


module.exports = { find, edit, add, remove };
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
