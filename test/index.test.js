const databases = require('../databases/index');
const mongoose = require('mongoose');
// mongodb jest - https://facebook.github.io/jest/docs/en/mongodb.html

let connection;
let db;

beforeAll(async () => {
  connection = await mongoose.connect('mongodb://localhost:27017/productDetails');
});

afterAll(async () => {
  await connection.close(() => {
    console.log('Mongoose is connection closed');
  });
});

describe('product details collection', () => {
  test('should add docs from collection', async () => {
    const productDetails = databases.collection('productDetails');

    await productDetails.insertMany([
      {
        id: 1, title: 'Patin', price: '$44.35', description: 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.', color: 'Orange', size: 3,
      },
      {
        id: 2, title: 'Hally', price: '$36.98', description: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', color: 'Yellow', size: 4,
      },
      {
        id: 3, title: 'Katusha', price: '$70.67', description: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', color: 'Goldenrod', size: 6,
      },
      {
        id: 4, title: 'Madelon', price: '$30.71', description: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.', color: 'Pink', size: 2,
      },
    ]);

    // aggreation in mongoose looks at data processing pipelines
    // filters queries - http://mongoosejs.com/docs/api.html#aggregate_Aggregate-sort
    // group by item and total price
    const foundProductDetails = await productDetails
      .aggregate({ $group: { _id: 'title' }, total: { $sum: '$price' } }).toArray();

    expect(foundProductDetails).toEqual([
      { _id: 'Patin', total: '$44.35' },
      { _id: 'Hally', total: '$36.98' },
      { _id: 'Katusha', total: '$70.67' },
      { _id: 'Madelon', total: '$30.71' },
    ]);
  });
});
