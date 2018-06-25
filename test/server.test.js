const request = require('supertest');
const app = require('../server/server');

// afterEach((done) => {
//   app.close();
//   done();
// });

describe('Test the root path', () => {
  test('It should response the GET method', () =>
    // need to return to prevent tests getting stuck
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  test('It should response with a json object of product information', (done) => {
    request(app)
      .get('/productDetails/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
