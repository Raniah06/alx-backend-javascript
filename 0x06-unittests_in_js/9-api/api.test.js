// 9-api/api.test.js

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  before((done) => {
    server = require('./api');  // Import and start the server
    done();
  });

  it('should have the correct status code for index page', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);  // Check status code
      done();
    });
  });

  it('should return the correct result for index page', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');  // Check response body
      done();
    });
  });

  // New test suite for /cart/:id route
  describe('Cart page', () => {
    it('should return status 200 for a valid cart id (numeric)', (done) => {
      request('http://localhost:7865/cart/12', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status 404 for an invalid cart id (non-numeric)', (done) => {
      request('http://localhost:7865/cart/hello', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        expect(body).to.equal('Not Found');
        done();
      });
    });
  });

  after((done) => {
    server.close();  // Close the server after tests are done
    done();
  });
});
