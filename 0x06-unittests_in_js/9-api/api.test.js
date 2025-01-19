// 9-api/api.test.js
const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index Page', () => {
  it('should return status 200 for GET /', (done) => {
    request(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system" for GET /', (done) => {
    request(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
