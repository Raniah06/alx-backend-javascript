// 9-api/api.test.js
const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Cart Page', () => {
  it('should return status 200 and correct message when id is a number', (done) => {
    const cartId = 12;
    request(`${baseUrl}/cart/${cartId}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${cartId}`);
      done();
    });
  });

  it('should return 404 when id is NOT a number', (done) => {
    const invalidCartId = 'hello';
    request(`${baseUrl}/cart/${invalidCartId}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 for empty cart ID', (done) => {
    request(`${baseUrl}/cart/`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
