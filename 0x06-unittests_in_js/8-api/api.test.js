// 8-api/api.test.js

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  before((done) => {
    server = require('./api');  // Import and start the server
    done();
  });

  it('should have the correct status code', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);  // Check status code
      done();
    });
  });

  it('should return the correct result', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');  // Check response body
      done();
    });
  });

  after((done) => {
    server.close();  // Close the server after tests are done
    done();
  });
});
