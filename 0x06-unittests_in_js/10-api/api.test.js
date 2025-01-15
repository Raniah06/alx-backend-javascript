// 10-api/api.test.js

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

  // New test suite for /available_payments route
  describe('Available payments', () => {
    it('should return status 200 and the correct payment methods', (done) => {
      request('http://localhost:7865/available_payments', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);  // Deep equality check
        done();
      });
    });
  });

  // New test suite for /login route
  describe('Login', () => {
    it('should return status 200 and the correct message for a valid username', (done) => {
      const payload = {
        userName: 'Betty'
      };

      request.post(
        {
          url: 'http://localhost:7865/login',
          json: payload
        },
        (err, res, body) => {
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Betty');  // Check response message
          done();
        }
      );
    });
  });

  after((done) => {
    server.close();  // Close the server after tests are done
    done();
  });
});
