// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return status code 200', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200); // Test for status code
      done();
    });
  });

  it('should return the correct response body', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Test for response message
      done();
    });
  });

  it('should have the correct content type', (done) => {
    request(url, (err, res, body) => {
      expect(res.headers['content-type']).to.include('text/html'); // Test for content type
      done();
    });
  });
});
